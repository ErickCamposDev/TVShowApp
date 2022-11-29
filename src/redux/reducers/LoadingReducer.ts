import { createReducer } from '@reduxjs/toolkit';
import { setLoadingAction } from '../actions/LoadingActions';

import { LoadingState } from '../ReduxTypes';

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingReducer = createReducer(initialState, builder => {
  builder.addCase(setLoadingAction, (state, action) => {
    state.isLoading = action.payload;
  });
});
