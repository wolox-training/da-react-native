import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '@constants/routes';
import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import { useRequest } from '@hooks';
import { getUserToken } from '@services/UserService';
import { Library, BookDetail, Login } from '@screens';
import Loader from '@components/Loader';

import { APP_OPTIONS, LOGIN_OPTIONS } from './constants';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
  const { data, loading } = useRequest(getUserToken);
  const [{ userState }, dispatch] = useGlobalValue();
  const token = userState?.token;
  const screenOptions = token ? APP_OPTIONS : LOGIN_OPTIONS;

  useEffect(() => {
    if (data && !token) dispatch(actionsCreator.logIn(data));
  }, [dispatch, data, token]);

  if (loading) return <Loader />;

  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        {token ? (
          <>
            <Screen
              name={Routes.LIBRARY.NAME}
              component={Library}
              options={{ title: Routes.LIBRARY.TITLE }}
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

export default AppRoutes;
