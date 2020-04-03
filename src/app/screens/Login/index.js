import React, { useState, useEffect } from 'react';
import {
  TextInput,
  ImageBackground,
  Image,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  View
} from 'react-native';

import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import { useLazyRequest } from '@hooks';
import { authUser, setUserToken } from '@services/UserService';
import LoginBg from '@assets/bc_inicio.png';
import LoginLogo from '@assets/Group.png';
import { hostedApi } from '@config/api';
import { WHITE } from '@constants/colors';

import styles from './styles';
import { DEFAULT_ERROR_MSG } from './constants';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [auth, { data: response, error: requestError, loading }] = useLazyRequest(authUser);
  const [, dispatch] = useGlobalValue();

  useEffect(() => {
    if (response) {
      (async () => {
        try {
          const { 'access-token': userToken, Uid, Client } = response?.headers;
          await setUserToken(userToken);
          hostedApi.setHeaders({ 'Access-Token': userToken, Uid, Client });
          dispatch(actionsCreator.logIn(userToken));
        } catch {
          setError(DEFAULT_ERROR_MSG);
        }
      })();
    } else if (requestError) {
      setError(DEFAULT_ERROR_MSG);
    }
  }, [response, requestError, dispatch]);

  const handleEmail = value => setEmail(value);
  const handlePassword = value => setPassword(value);

  const handleSubmit = () => auth({ email, password });

  return (
    <ImageBackground style={styles.loginBg} source={LoginBg}>
      <Image style={styles.loginLogo} source={LoginLogo} />
      <TextInput style={styles.loginInput} onChangeText={handleEmail} placeholder="Email" />
      <TextInput style={styles.loginInput} onChangeText={handlePassword} placeholder="Password" />
      <TouchableWithoutFeedback disabled={loading} onPress={handleSubmit}>
        <View style={styles.loginSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color={WHITE} />
          ) : (
            <Text style={styles.loginSubmitText}>Log In</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.loginError}>{error}</Text>
      <Text style={styles.loginFooter}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default Login;
