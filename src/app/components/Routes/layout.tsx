import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Library, BookDetail, Login } from '@screens/index';
import withLoader from '@components/Loader';
import withCustomHeader from '@components/Header';
import * as Routes from '@constants/routes';

import { APP_OPTIONS, LOGIN_OPTIONS } from './constants';

interface Props {
  token: string | null;
}

const { Navigator, Screen } = createStackNavigator();

function AppRoutes({ token }: Props) {
  const screenOptions = token ? APP_OPTIONS : LOGIN_OPTIONS;
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        {token ? (
          <>
            <Screen
              name={Routes.LIBRARY.NAME}
              component={Library}
              options={{ title: Routes.LIBRARY.TITLE, header: withCustomHeader({ hasLogoutBtn: true }) }}
            />
            <Screen
              name={Routes.BOOK_DETAIL.NAME}
              component={BookDetail}
              options={{
                title: Routes.BOOK_DETAIL.TITLE,
                header: withCustomHeader({ hasBackBtn: true })
              }}
            />
          </>
        ) : (
          <Screen name={Routes.LOGIN.NAME} component={Login} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default withLoader({})(AppRoutes);
