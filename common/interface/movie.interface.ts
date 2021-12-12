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
export interface IDataMovie {
  name: string;
  description: string;
  posterUrl: string;
  trailerUrl: string;
  tags: string[];
  runningTime: string;
  id: string;
}

export interface IResponseMoviceDetail {
  code: number;
  message: string;
  data: IDataMovie;
}

// movie cinema

export interface IDataCinemasByMovie {
  name: string;
  partnerId: string;
  address: string;
  rooms: any;
  id: string;
}

// movie schedule

export interface ISeat {
  ticketPrice: number;
  code: string;
  row: number;
  isReserved: boolean;
}

export interface IDataGetSeats {
  id: string;
  name: string;
  seats: ISeat[];
}

export interface IRoom {
  id: string;
  name: string;
  seats: ISeat[];
}

export interface IDataScheduleByMovie {
  roomId: string;
  movieId: string;
  startTime: Date;
  endTime: Date;
  notice: string;
  room: IRoom;
  movie: IDataMovie;
  id: string;
}
