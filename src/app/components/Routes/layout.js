import React from 'react';
import { bool, string } from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Library, BookDetail, Login } from '@screens';
import withLoader from '@components/Loader';
import * as Routes from '@constants/routes';

import { APP_OPTIONS, LOGIN_OPTIONS } from './constants';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes({ token }) {
  const screenOptions = token ? APP_OPTIONS : LOGIN_OPTIONS;
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        {token ? (
          <>
            <Screen
              name={Routes.LIBRARY.NAME}
              component={Library}
              options={{ title: Routes.LIBRARY.TITLE, hasLogoutBtn: true }}
            />
            <Screen
              name={Routes.BOOK_DETAIL.NAME}
              component={BookDetail}
              options={{ title: Routes.BOOK_DETAIL.TITLE, hasBackBtn: true }}
            />
          </>
        ) : (
          <Screen name={Routes.LOGIN.NAME} component={Login} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}

AppRoutes.propTypes = {
  isLoading: bool,
  token: string
};

export default withLoader({})(AppRoutes);
