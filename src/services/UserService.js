import api from '@config/api';

import { setStorageItem, getStorageItem } from '@utils/storage';

export const authUser = user => api.post('/auth/sign_in', user);

export const getAuthHeaders = () => getStorageItem('authHeaders');

export const setAuthHeaders = data => data && setStorageItem('authHeaders', data);
