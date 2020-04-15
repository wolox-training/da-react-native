import React from 'react';
import { Text, ImageBackground, View } from 'react-native';

import navBg from '@assets/bc_navbar.png';
import defaultBackBtn from '@assets/ic_back.png';

import BackButton from './components/BackButton';
import LogoutButton from './components/LogoutButton';
import styles from './styles';

interface Props {
  scene: {
    descriptor: { options: { title?: string; headerStyle?: { height: number }; hasBackBtn?: boolean } };
  };
  navigation: { goBack(): void };
}

interface CustomProps {
  backButton?: number;
  hasBackBtn?: boolean;
  hasLogoutBtn?: boolean;
}

const withCustomHeader = ({ backButton, hasBackBtn, hasLogoutBtn }: CustomProps) =>
  function PropsProxy({ scene, navigation }: Props) {
    const {
      options: { title, headerStyle }
    } = scene.descriptor;
    const { height } = headerStyle!;

    return (
      <ImageBackground style={{ ...styles.headerBg, height }} source={navBg}>
        <View style={styles.headerButton}>
          {hasBackBtn && !hasLogoutBtn && (
            <BackButton backButton={backButton || defaultBackBtn} onPress={navigation.goBack} />
          )}
          {hasLogoutBtn && !hasBackBtn && <LogoutButton />}
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
      </ImageBackground>
    );
  };

export default withCustomHeader;
