import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { string } from 'prop-types';

import { BLUE } from '@constants/colors';

import styles from './styles';
import { LOADER_SIZE } from './constants';

function Loader({ loaderColor, loaderSize, bgColor }) {
  return (
    <View style={bgColor ? { ...styles.loaderContainer, backgroundColor: bgColor } : styles.loaderContainer}>
      <ActivityIndicator size={loaderSize} color={loaderColor} />
    </View>
  );
}

Loader.propTypes = {
  loaderColor: string,
  loaderSize: string,
  bgColor: string
};

Loader.defaultProps = {
  loaderColor: BLUE,
  loaderSize: LOADER_SIZE.large
};

export default Loader;
