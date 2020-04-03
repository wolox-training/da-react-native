import api from '@config/api';
import AsyncStorage from '@react-native-community/async-storage';

export const authUser = user => api.get('/users', user);

export const getUser = () => AsyncStorage.getItem('userToken');

export const setUser = data => AsyncStorage.setItem('userToken', data);
