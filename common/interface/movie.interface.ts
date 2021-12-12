/* eslint-disable camelcase */

// list movies

export interface IParamsGetListMovies {
  Tag?: string[];
  Keywords?: string;
  SortOrder?: string;
  Skip?: number;
  Limit?: number;
}

export interface IFoundItem {
  name: string;
  description?: string;
  posterUrl: string;
  trailerUrl: string;
  tags: string[];
  runningTime: string;
  id: string;
}

export interface IRequest {
  sortOrder: string;
  skip: number;
  limit: number;
}

export interface IResponseGetListMovies {
  foundItems: IFoundItem[];
  request: IRequest;
  totalCount: number;
}

// movie details
export interface IData {
  id: string;
  temp_id: string;
  name: string;
  release_date: string;
  video_release_date: string;
  imdb_link: string;
  poster_link: string;
  tags: string[];
  ratings: string;
  running_time: number;
  desc: string;
}

export interface IResponseMoviceDetail {
  code: number;
  message: string;
  data: IData;
}
