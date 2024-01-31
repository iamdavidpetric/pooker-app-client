import { combineReducers } from 'redux';
import { createActions } from 'reduxsauce';
import { createBrowserHistory } from 'history';
import { createRouterReducer } from '@lagunovsky/redux-react-router';

import reducers from '../reducers';

export const { Types } = createActions(
  {
    reset: null,
  },
  { prefix: 'state/' },
);

export const history = createBrowserHistory();

const combinedReducers = combineReducers({
  application: reducers.application,
  transient: reducers.transient,
  router: createRouterReducer(history),
});

const rootReducer = (state, action) => {
  if (action.type === Types.RESET) {
    state = {
      application: { ...state.application },
      transient: undefined,
      router: undefined,
    };
  }
  return combinedReducers(state, action);
};

export default rootReducer;
