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

import { useGlobalValue } from '@context/index';
import { actionsCreator } from '@context/user/actions';
import { useLazyRequest } from '@hooks/index';
import { authUser, setAuthHeaders } from '@services/UserService';
import LoginBg from '@assets/bc_inicio.png';
import LoginLogo from '@assets/Group.png';
import api from '@config/api';
import COLORS from '@constants/colors';
import { AuthHeaders } from '@interfaces/api';

import styles from './styles';
import { DEFAULT_ERROR_MSG } from './constants';

interface Response {
  headers: AuthHeaders;
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [auth, { data, error: requestError, loading }] = useLazyRequest<Response>(authUser);
  const [, dispatch] = useGlobalValue();

  useEffect(() => {
    if (data) {
      (async () => {
        try {
          const { 'access-token': userToken, uid, client } = data?.headers;
          const headers = { 'access-token': userToken, uid, client };
          await setAuthHeaders(headers);
          api.setHeaders(headers);
          dispatch(actionsCreator.logIn(userToken));
        } catch (e) {
          setError(DEFAULT_ERROR_MSG);
        }
      })();
    } else if (requestError) {
      setError(DEFAULT_ERROR_MSG);
    }
  }, [data, requestError, dispatch]);

  const handleEmail = (value: string) => setEmail(value);
  const handlePassword = (value: string) => setPassword(value);

  const handleSubmit = () => auth({ email, password });

  return (
    <ImageBackground style={styles.loginBg} source={LoginBg}>
      <Image style={styles.loginLogo} source={LoginLogo} />
      <TextInput style={styles.loginInput} onChangeText={handleEmail} placeholder="Email" />
      <TextInput
        style={styles.loginInput}
        onChangeText={handlePassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableWithoutFeedback disabled={loading} onPress={handleSubmit}>
        <View style={styles.loginSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.WHITE} />
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
