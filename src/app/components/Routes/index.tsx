import React, { useEffect } from 'react';

import { useGlobalValue } from '@context/index';
import { useRequest } from '@hooks/index';
import { AuthHeaders } from '@interfaces/api';
import { actionsCreator } from '@context/user/actions';
import { getAuthHeaders } from '@services/UserService';
import api from '@config/api';

import AppRoutes from './layout';

interface Response {
  data: AuthHeaders;
}

function RoutesContainer() {
  const { data: response, loading } = useRequest<Response>(getAuthHeaders);
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
