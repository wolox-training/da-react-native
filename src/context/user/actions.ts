import { ActionsCreator, ActionTypes } from './types';

export const actionsCreator: ActionsCreator = {
  logIn: token => ({
    type: ActionTypes.LOG_IN,
    payload: token
  }),
  logOut: () => ({
    type: ActionTypes.LOG_OUT
  })
};
