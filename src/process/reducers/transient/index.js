import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from '../shared';

const initialState = {};

export const { Creators, Types } = createActions(
  {
    loading: ['props'],
    reset: null,
    updateProps: ['props'],
  },
  { prefix: 'transient/' },
);

const reset = () => initialState;

export default createReducer(initialState, {
  [Types.LOADING]: updateProps,
  [Types.RESET]: reset,
  [Types.UPDATE_PROPS]: updateProps,
});
