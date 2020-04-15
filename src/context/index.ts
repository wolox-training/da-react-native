import React, { useContext, createContext } from 'react';

import { userReducer, userState } from './user';
import { UserAction } from './user/types';

export const globalState = {
  userState
};

const dispatch: React.Dispatch<any> = () => ({});

export const globalReducer = (state: typeof globalState, action: unknown) => ({
  userState: userReducer(state.userState, action as UserAction)
});

const defaultValue = [globalState, dispatch] as const;

export const GlobalContext = createContext(defaultValue);

export const useGlobalValue = () => useContext(GlobalContext);
