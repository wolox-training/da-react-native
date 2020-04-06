import React from 'react';
import { func, number } from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

import defaultBackBtn from '@assets/ic_back.png';

import styles from './styles';

function BackButton({ onPress, backButton }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.headerBackBtn} source={backButton || defaultBackBtn} />
    </TouchableOpacity>
  );
}

BackButton.propTypes = {
  onPress: func.isRequired,
  backButton: number
};

export default BackButton;
