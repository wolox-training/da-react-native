import React, { useEffect } from 'react';

import { useGlobalValue } from '@context';
import { actionsCreator } from '@context/user/actions';
import { useRequest } from '@hooks';
import { getAuthHeaders } from '@services/UserService';
import api from '@config/api';

import AppRoutes from './layout';

function RoutesContainer() {
  const { data: response, loading } = useRequest(getAuthHeaders);
  const [{ userState }, dispatch] = useGlobalValue();
  const headers = response?.data;
  const token = userState?.token;
  useEffect(() => {
    if (headers) {
      api.setHeaders(headers);
      dispatch(actionsCreator.logIn(headers['access-token']));
    }
  }, [dispatch, headers]);

  return <AppRoutes isLoading={loading} token={token} />;
}

export default RoutesContainer;
