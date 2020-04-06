import { useContext, createContext } from 'react';

import { userReducer, userState } from './user';

export const globalState = {
  userState
};

export const globalReducer = (state, action) => ({
  userState: userReducer(state.userState, action)
});

export const GlobalContext = createContext();

export const useGlobalValue = () => useContext(GlobalContext);
