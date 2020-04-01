import React from 'react';
import { Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

import navBg from '@assets/bc_navbar.png';
import defaultBackBtn from '@assets/ic_back.png';

import styles from './styles';

function Header({ scene, navigation }) {
  const {
    options: {
      backButton,
      title,
      headerStyle: { height },
      hasBackBtn = false
    }
  } = scene.descriptor;
  return (
    <ImageBackground style={{ ...styles.headerBg, height }} source={navBg}>
      {hasBackBtn && (
        <TouchableOpacity onPress={navigation.goBack}>
          <Image style={styles.headerBackBtn} source={backButton || defaultBackBtn} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </ImageBackground>
  );
}

export default Header;
