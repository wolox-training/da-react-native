import AsyncStorage from '@react-native-community/async-storage';

export const setStorageItem = <T>(key: string, data: T) => AsyncStorage.setItem(key, JSON.stringify(data));

interface Response<T> {
  data: T | null;
  ok: boolean;
}

export const getStorageItem = async <T>(key: string): Promise<Response<T>> => {
  try {
    const response = await AsyncStorage.getItem(key);
    if (response) return Promise.resolve({ data: JSON.parse(response), ok: true });
    throw Error();
  } catch {
    return Promise.resolve({ data: null, ok: false });
  }
};
