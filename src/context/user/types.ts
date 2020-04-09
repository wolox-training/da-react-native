export enum ActionTypes {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT'
}

export interface ActionsCreator {
  logIn: (token: string) => UserAction;
  logOut: () => UserAction;
}

export interface UserState {
  token: string | null;
}

export type UserAction = { type: ActionTypes.LOG_IN; payload: string } | { type: ActionTypes.LOG_OUT };
