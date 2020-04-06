export const isNotEmptyArray = array => Array.isArray(array) && !!array.length;

export const stringArrayToObject = array =>
  isNotEmptyArray(array) && array.reduce((result, value) => ({ ...result, [value]: value }), {});
