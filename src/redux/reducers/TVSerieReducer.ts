import { createReducer } from '@reduxjs/toolkit';
import { setSeriesAction } from '../actions/TVSerieActions';

import { TVSerieState } from '../ReduxTypes';

const initialState: TVSerieState = {
  series: [],
};

export const tvSerieReducer = createReducer(initialState, builder => {
  builder.addCase(setSeriesAction, (state, action) => {
    state.series = action.payload.seriesResponse.map(
      serieResponse => serieResponse.show,
    );
  });
});
