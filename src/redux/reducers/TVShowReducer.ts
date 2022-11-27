import { createReducer } from '@reduxjs/toolkit';
import { setShowsAction } from '../actions/TVShowActions';

import { TVShowState } from '../ReduxTypes';

const initialState: TVShowState = {
  shows: [],
};

export const tvShowReducer = createReducer(initialState, builder => {
  builder.addCase(setShowsAction, (state, action) => {
    state.shows = action.payload.showsResponse.map(
      showResponse => showResponse.show,
    );
  });
});
