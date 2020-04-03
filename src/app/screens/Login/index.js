import React, { useState, useEffect } from 'react';
import { TextInput, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import { useLazyRequest } from '@hooks';
import { authUser, setUser } from '@services/UserService';
import LoginBg from '@assets/bc_inicio.png';
import LoginLogo from '@assets/Group.png';

import styles from './styles';
import { DEFAULT_ERROR_MSG } from './constants';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [auth, { data, error: requestError }] = useLazyRequest(authUser);
  const userToken = data?.[0]?.token;
  const [, dispatch] = useGlobalValue();

  useEffect(() => {
    if (userToken) {
      (async () => {
        try {
          await setUser(userToken);
          dispatch(actionsCreator.logIn(userToken));
        } catch {
          setError(DEFAULT_ERROR_MSG);
        }
      })();
    } else if (requestError) {
      setError(DEFAULT_ERROR_MSG);
    }
  }, [userToken, requestError, dispatch]);

  const handleEmail = value => setEmail(value);
  const handlePassword = value => setPassword(value);

  const handleSubmit = () => auth({ email, password });

  return (
    <ImageBackground style={styles.loginBg} source={LoginBg}>
      <Image style={styles.loginLogo} source={LoginLogo} />
      <TextInput style={styles.loginInput} onChangeText={handleEmail} placeholder="Email" />
      <TextInput style={styles.loginInput} onChangeText={handlePassword} placeholder="Password" />
      <TouchableOpacity onPress={handleSubmit} style={styles.loginSubmit}>
        <Text style={styles.loginSubmitText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.loginError}>{error}</Text>
      <Text style={styles.loginFooter}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default Login;
