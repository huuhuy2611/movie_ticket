/* eslint-disable camelcase */
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
