import { useContext, createContext } from 'react';

import { userReducer, userState } from './user';
import { UserState, UserAction } from './user/types';

interface GlobalState {
  userState: UserState;
}

export const globalState: GlobalState = {
  userState
};

export const globalReducer = (state: GlobalState, action: unknown) => ({
  userState: userReducer(state.userState, action as UserAction)
});

export const GlobalContext = createContext(globalState);

export const useGlobalValue = () => useContext(GlobalContext);
