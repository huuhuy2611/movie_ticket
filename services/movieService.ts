/* eslint-disable consistent-return */
import axios from 'axios';

const { API_URL } = process.env;

export const getListMovieAPI = () => {
  try {
    const res = axios.post(
      `http://2e64-1-55-251-144.ap.ngrok.io/movie/search`,
      {
        search_text: '',
        name: 'string',
        page: 0,
        per_page: 0,
        sort: 1,
      }
    );
    return res;
  } catch (err) {
    return err;
  }
};

export const getMovieDetailAPI = (id: string) => {
  try {
    const res = axios.get(`http://2e64-1-55-251-144.ap.ngrok.io/movie/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};
