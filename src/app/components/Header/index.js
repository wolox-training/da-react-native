import React from 'react';
import { Text, ImageBackground } from 'react-native';

import navBg from '@assets/bc_navbar.png';

import BackButton from './components/BackButton';
import LogoutButton from './components/LogoutButton';
import styles from './styles';

function Header({ scene, navigation }) {
  const {
    options: {
      backButton,
      title,
      headerStyle: { height },
      hasBackBtn = false,
      hasLogoutBtn = false
    }
  } = scene.descriptor;
  return (
    <ImageBackground style={{ ...styles.headerBg, height }} source={navBg}>
      {hasBackBtn && <BackButton backButton={backButton} onPress={navigation.goBack} />}
      {hasLogoutBtn && <LogoutButton />}
      <Text style={styles.headerTitle}>{title}</Text>
    </ImageBackground>
  );
}

export default Header;
