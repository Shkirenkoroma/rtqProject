import { IndexInfo } from 'typescript';

export interface IAllCharacters {
  info: IndexInfo;
  results: ICharacter[];
};

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export interface IOrigin {
  name: string;
  url: string;
};

export interface ILocation {
  name: string;
  url: string;
};

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
};
