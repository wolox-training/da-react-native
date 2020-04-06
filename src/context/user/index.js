import { actions } from './actions';

export const userState = {
  token: null
};

const reducer = {
  [actions.LOG_IN]: (state, action) => ({
    ...state,
    token: action.payload
  }),
  [actions.LOG_OUT]: state => ({
    ...state,
    token: null
  })
};

export const userReducer = (state = userState, action) =>
  reducer[action.type] ? reducer[action.type](state, action) : state;
