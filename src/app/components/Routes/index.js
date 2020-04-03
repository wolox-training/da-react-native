import React, { useEffect } from 'react';

import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import { useRequest } from '@hooks';
import { getUserToken } from '@services/UserService';

import AppRoutes from './layout';

function RoutesContainer() {
  const { data, loading } = useRequest(getUserToken);
  const [{ userState }, dispatch] = useGlobalValue();
  const token = userState?.token;

  useEffect(() => {
    if (data && !token) dispatch(actionsCreator.logIn(data));
  }, [dispatch, data, token]);

  return <AppRoutes isLoading={loading} token={token} />;
}

export default RoutesContainer;
