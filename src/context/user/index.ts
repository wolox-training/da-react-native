import { UserState, UserAction, ActionTypes } from './types';

export const userState: UserState = {
  token: null
};

export const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        token: action.payload
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state
      };
    default:
      return state;
  }
};
