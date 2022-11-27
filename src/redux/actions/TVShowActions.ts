import { createAction } from '@reduxjs/toolkit';
import { SearchProvider } from '~/services';
import { SearchByQueryResponse } from '~/services/TVMazeApi/types/Search';
import { AppDispatch } from '../AppStore';
import { withPayloadType } from '../utils';

export const setShowsAction = createAction(
  'SET_SHOWS',
  withPayloadType<{ showsResponse: SearchByQueryResponse[] }>(),
);

export const getShowsThunk = (showName?: string) => {
  return async (dispatch: AppDispatch) => {
    if (showName) {
      const response = await SearchProvider.getShowsByName(showName);
      dispatch(setShowsAction({ showsResponse: response.data }));

      //buscar por nome
    }
    //retorna todos
  };
};
