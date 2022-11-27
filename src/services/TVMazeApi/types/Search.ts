interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Self {
  href: string;
}

interface Previousepisode {
  href: string;
}

export interface Link {
  self: Self;
}

interface Links extends Link {
  previousepisode: Previousepisode;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: any;
  dvdCountry?: any;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface SearchByQueryResponse {
  score: number;
  show: Show;
}

export interface SearchByQueryRequest {
  q: string;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday?: any;
  deathday?: any;
  gender: string;
  image: Image;
  updated: number;
  _links: Link;
}

export interface SearchPeopleByQueryResponse {
  score: number;
  person: Person;
}
