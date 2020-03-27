import React from 'react';
import { View } from 'react-native';

import Library from './screens/Library';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <Library />
    </View>
  );
}

export default App;
