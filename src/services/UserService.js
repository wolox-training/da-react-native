import { hostedApi } from '@config/api';
import AsyncStorage from '@react-native-community/async-storage';

export const authUser = user => hostedApi.post('/auth/sign_in', user);

export const getUser = () => AsyncStorage.getItem('userToken');

export const setUser = data => AsyncStorage.setItem('userToken', data);
