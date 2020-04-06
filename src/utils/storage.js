import AsyncStorage from '@react-native-community/async-storage';

export const setStorageItem = (key, data) => AsyncStorage.setItem(key, JSON.stringify(data));

export const getStorageItem = async key => {
  try {
    const response = await AsyncStorage.getItem(key);
    if (response) return Promise.resolve({ data: JSON.parse(response), ok: true });
    throw Error();
  } catch {
    return Promise.resolve({ data: null, ok: false });
  }
};
