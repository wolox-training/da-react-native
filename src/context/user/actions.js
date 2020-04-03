import { stringArrayToObject } from '@utils/arrays';

export const actions = stringArrayToObject(['LOG_IN', 'LOG_OUT']);

export const actionsCreator = {
  logIn: token => ({
    type: actions.LOG_IN,
    payload: token
  }),
  logOut: () => ({
    type: actions.LOG_OUT
  })
};
