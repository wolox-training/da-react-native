import { DATA_TYPES } from '@constants/types';

export const isNotEmptyObject = obj =>
  obj && !Array.isArray(obj) && typeof obj === DATA_TYPES.object && !!Object.keys(obj).length;
