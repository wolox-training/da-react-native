import React from 'react';
import { View } from 'react-native';

import Book from './components/Book';

import styles from './styles';

function App() {
  return (
    <View style={styles.container}>
      <Book />
    </View>
  );
}

export default App;
