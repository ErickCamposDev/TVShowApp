export enum TranslationKeyEnum {
  WelcomeLogin = 'welcome',
  Home = 'home',
  Settings = 'settings',
  AppLanguage = 'app-language',
  Select = 'select',
  WelcomeText = 'welcome-text',
  Disable = 'disable',
  Enable = 'enable',
  DarkTheme = 'dark-theme',
  LanguageTitle = 'language-title',
  English = 'english',
  Portuguese = 'portuguese',
  MoviesSectionTitle = 'movies-section-title',
  Error = 'error',
  ErrorUnexpected = 'error-unexpected',
  SearchPlaceholder = 'search-placeholder',
  Episodes = 'episodes',
  Favorites = 'Favorites',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
