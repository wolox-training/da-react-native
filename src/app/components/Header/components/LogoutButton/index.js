import React, { useState } from 'react';
import { Image, ActivityIndicator, TouchableWithoutFeedback, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import logout from '@assets/logout.png';
import { WHITE } from '@constants/colors';

import styles from './styles';

function LogoutButton() {
  const [, dispatch] = useGlobalValue();
  const [loading, setLoading] = useState();
  const handleLogoutBtn = async () => {
    setLoading(true);
    try {
      await AsyncStorage.clear();
      dispatch(actionsCreator.logOut());
      setLoading(false);
    } catch (e) {
      //
    }
  };

  return (
    <TouchableWithoutFeedback disabled={loading} onPress={handleLogoutBtn}>
      <View style={styles.logoutBtn}>
        {loading ? <ActivityIndicator size="small" color={WHITE} /> : <Image source={logout} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LogoutButton;
