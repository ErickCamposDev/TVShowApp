import { createAction } from '@reduxjs/toolkit';
import { Serie } from '~/services/TVMazeApi/types/Serie';
import { AppDispatch, RootState } from '../AppStore';
import { withPayloadType } from '../utils';

export const setNewFavoriteAction = createAction(
  'SET_NEW_FAVORITE',
  withPayloadType<{ serie: Serie }>(),
);

export const deleteFavoriteAction = createAction(
  'DELETE_FAVORITE',
  withPayloadType<{ serieId: number }>(),
);

export const setSerieAsFavoriteThunk = (serie: Serie) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setNewFavoriteAction({ serie }));
  };
};
export const getIsSerieFavoriteThunk = (serieId: number) => {
  return (_: AppDispatch, getState: () => RootState) => {
    return getState().favorite.favorites.some(el => el.id === serieId);
  };
};
