import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import Routes from '@components/Routes';

import { GlobalContext, globalState, globalReducer } from '@context/index';

function App() {
  return (
    <GlobalContext.Provider value={useReducer(globalReducer, globalState)}>
      <Routes />
    </GlobalContext.Provider>
  );
}

export default App;
