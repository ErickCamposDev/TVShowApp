import { createReducer } from '@reduxjs/toolkit';
import { Season } from '~/services/TVMazeApi/types/Serie';
import {
  setCurrentEpisodesAction,
  setSeriesAction,
} from '../actions/TVSerieActions';

import { TVSerieState } from '../ReduxTypes';

const initialState: TVSerieState = {
  series: [],
  selectedSerieSeasons: [],
};

export const tvSerieReducer = createReducer(initialState, builder => {
  builder.addCase(setSeriesAction, (state, action) => {
    if (action.payload.shouldReplace) {
      state.series = action.payload.seriesResponse;
    } else {
      state.series = [...state.series, ...action.payload.seriesResponse];
    }
  });

  builder.addCase(setCurrentEpisodesAction, (state, action) => {
    const seasons = action.payload.episodes.reduce((acc, episode) => {
      const currentSeason = acc.findIndex(el => el.season === episode.season);

      if (currentSeason !== -1) {
        acc[currentSeason] = {
          season: episode.season,
          episodes: [...acc[currentSeason].episodes, episode],
        };
      } else {
        acc.push({
          season: episode.season,
          episodes: [episode],
        });
      }
      return acc;
    }, [] as Season[]);

    state.selectedSerieSeasons = seasons;
  });
});
