import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { BLUE, TRANSPARENT } from '@constants/colors';

import styles from './styles';
import { LOADER_SIZE } from './constants';

const withLoader = ({
  loaderColor = BLUE,
  loaderSize = LOADER_SIZE.large,
  bgColor = TRANSPARENT
}) => WrappedComponent =>
  function PropsProxy({ isLoading, ...props }) {
    return isLoading ? (
      <View style={{ ...styles.loaderContainer, backgroundColor: bgColor }}>
        <ActivityIndicator size={loaderSize} color={loaderColor} />
      </View>
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default withLoader;
