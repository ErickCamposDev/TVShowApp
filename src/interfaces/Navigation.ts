export const enum SCREENS {
  HOME = 'Home',
  FAVORITES = 'Favorites',
  HOME_TAB = 'HomeTab',
  SERIE_DETAILS = 'SerieDetails',
  SETTINGS = 'Settings',
  SERIES_STACK = 'SeriesStack'

}

export type RootStackParamList = {
  [SCREENS.HOME_TAB]: {someParam: string};
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.SERIE_DETAILS]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.SETTINGS]: undefined;
  [SCREENS.SERIES_STACK]: undefined;
};
