import { Serie } from '~/services/TVMazeApi/types/Serie';

export const enum SCREENS {
  HOME = 'Home',
  FAVORITES = 'Favorites',
  HOME_TAB = 'HomeTab',
  SERIE_DETAILS = 'SerieDetails',
  SETTINGS = 'Settings',
  SERIES_STACK = 'SeriesStack',
  WELCOME = 'Welcome',
}

export type RootStackParamList = {
  [SCREENS.HOME_TAB]: { someParam: string };
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.SERIE_DETAILS]: { serie: Serie };
  [SCREENS.HOME]: undefined;
  [SCREENS.SETTINGS]: undefined;
  [SCREENS.SERIES_STACK]: undefined;
  [SCREENS.WELCOME]: undefined;
};
