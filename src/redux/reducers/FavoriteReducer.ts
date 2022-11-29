import { createReducer } from '@reduxjs/toolkit';
import {
  deleteFavoriteAction,
  setNewFavoriteAction,
} from '../actions/FavoriteActions';

import { FavoriteState } from '../ReduxTypes';

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteReducer = createReducer(initialState, builder => {
  builder.addCase(deleteFavoriteAction, (state, action) => {
    state.favorites = state.favorites.filter(
      el => el.id !== action.payload.serieId,
    );
  });
  builder.addCase(setNewFavoriteAction, (state, action) => {
    if (!state.favorites.some(el => el.id === action.payload.serie.id)) {
      state.favorites = [...state.favorites, action.payload.serie];
    }
  });
});
