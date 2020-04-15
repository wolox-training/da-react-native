import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  backButton: number;
}

function BackButton({ onPress, backButton }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.headerBackBtn} source={backButton} />
    </TouchableOpacity>
  );
}

export default BackButton;
