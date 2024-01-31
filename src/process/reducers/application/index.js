import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from '../shared';

const initialState = {};

export const { Creators, Types } = createActions(
  {
    updateProps: ['props'],
  },
  { prefix: 'application/' },
);

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
});
