import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import COLORS from '@constants/colors';

import styles from './styles';
import { LOADER_SIZE } from './constants';

interface Props {
  isLoading: boolean;
}

type FunctionComponent<T> = (param: T) => JSX.Element;

const withLoader = ({
  loaderColor = COLORS.BLUE,
  loaderSize = LOADER_SIZE.large,
  bgColor = COLORS.TRANSPARENT
}) => <T extends object>(WrappedComponent: FunctionComponent<T>) =>
  function PropsProxy<U extends T & Props>({ isLoading, ...props }: U) {
    return isLoading ? (
      <View style={{ ...styles.loaderContainer, backgroundColor: bgColor }}>
        <ActivityIndicator size={loaderSize} color={loaderColor} />
      </View>
    ) : (
      <WrappedComponent {...(props as T)} />
    );
  };

export default withLoader;
