import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Routes from '@constants/routes';
import Header from '@components/Header';

import { Library, BookDetail } from './screens';
import { HEADER_MODE } from './constants';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.LIBRARY.NAME}
        screenOptions={{
          header: Header,
          headerMode: HEADER_MODE[Platform.OS],
          headerTransparent: true,
          headerStyle: { height: 114 }
        }}>
        <Screen name={Routes.LIBRARY.NAME} component={Library} options={{ title: Routes.LIBRARY.TITLE }} />
        <Screen
          name={Routes.BOOK_DETAIL.NAME}
          component={BookDetail}
          options={{ title: Routes.BOOK_DETAIL.TITLE, hasBackBtn: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
