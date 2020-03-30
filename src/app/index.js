import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Routes from '@constants/routes';

import { Library, BookDetail } from './screens';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.LIBRARY}>
        <Screen name={Routes.LIBRARY.NAME} component={Library} options={{ title: Routes.LIBRARY.TITLE }} />
        <Screen
          name={Routes.BOOK_DETAIL.NAME}
          component={BookDetail}
          options={{ title: Routes.BOOK_DETAIL.TITLE }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
