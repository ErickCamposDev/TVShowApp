import { createAction } from '@reduxjs/toolkit';
import { SearchProvider, SerieProvider } from '~/services';
import { Episode, Serie } from '~/services/TVMazeApi/types/Serie';
import { AppDispatch } from '../AppStore';
import { withPayloadType } from '../utils';
import { setLoadingAction } from './LoadingActions';

export const setSeriesAction = createAction(
  'SET_SERIES',
  withPayloadType<{
    seriesResponse: Serie[];
    shouldReplace: boolean;
  }>(),
);

export const setCurrentEpisodesAction = createAction(
  'SET_CURRENT_EPISODES',
  withPayloadType<{
    episodes: Episode[];
  }>(),
);

export const getSeriesThunk = (serieName?: string, page?: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let shouldReplace = false;
      if (page === 0) {
        shouldReplace = true;
        dispatch(setLoadingAction(true));
      }
      let series: Serie[] = [];
      if (serieName && serieName !== '') {
        const response = await SearchProvider.getSeriesByName(serieName);
        series = response.data.map(serie => serie.show);
        shouldReplace = true;
      } else {
        const response = await SerieProvider.getAllSeries(page);
        series = response.data;
      }

      dispatch(setSeriesAction({ seriesResponse: series, shouldReplace }));
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
};

export const getEpisodesThunk = (serieId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingAction(true));
      const response = await SerieProvider.getEpisodes(serieId);

      dispatch(setCurrentEpisodesAction({ episodes: response.data }));
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
};
