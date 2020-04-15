import React, { useState } from 'react';
import { Image, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useGlobalValue } from '@context/index';
import { actionsCreator } from '@context/user/actions';
import logout from '@assets/logout.png';
import COLORS from '@constants/colors';

import styles from './styles';

function LogoutButton() {
  const [, dispatch] = useGlobalValue();
  const [loading, setLoading] = useState<boolean>();
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
    <TouchableOpacity disabled={loading} onPress={handleLogoutBtn}>
      <View style={styles.logoutBtn}>
        {loading ? <ActivityIndicator size="small" color={COLORS.WHITE} /> : <Image source={logout} />}
      </View>
    </TouchableOpacity>
  );
}

export default LogoutButton;
