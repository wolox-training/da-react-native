import api from '@config/api';

import { setStorageItem, getStorageItem } from '@utils/storage';
import { AuthHeaders } from '@interfaces/api';

interface User {
  email: string;
  password: string;
}

export const authUser = (user: User) => api.post<void>('/auth/sign_in', user);

export const getAuthHeaders = () => getStorageItem<AuthHeaders>('authHeaders');

export const setAuthHeaders = (data: AuthHeaders) => setStorageItem('authHeaders', data);
