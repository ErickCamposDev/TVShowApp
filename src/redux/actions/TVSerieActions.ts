import { createAction } from '@reduxjs/toolkit';
import { SearchProvider } from '~/services';
import { SearchByQueryResponse } from '~/services/TVMazeApi/types/Serie';
import { AppDispatch } from '../AppStore';
import { withPayloadType } from '../utils';

export const setSeriesAction = createAction(
  'SET_SERIES',
  withPayloadType<{ seriesResponse: SearchByQueryResponse[] }>(),
);

export const getSeriesThunk = (serieName?: string) => {
  return async (dispatch: AppDispatch) => {
    if (serieName) {
      const response = await SearchProvider.getSeriesByName(serieName);
      dispatch(setSeriesAction({ seriesResponse: response.data }));
    }
  };
};
