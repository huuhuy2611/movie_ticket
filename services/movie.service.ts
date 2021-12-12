import axios from 'axios';
import { IParamsGetListMovies } from '@/common/interface/movie.interface';
import { API_URL } from './constant.service';
import { getParams } from '@/common/ultils/getParamsAPI';

export const getListMovies = async (params?: IParamsGetListMovies) => {
  try {
    const res = await axios.get(`${API_URL}/Movies${getParams(params)}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};

export const getListMoviesAvailable = async (params?: IParamsGetListMovies) => {
  try {
    const res = await axios.get(
      `${API_URL}/Movies/available${getParams(params)}`
    );
    return res?.data;
  } catch (err) {
    return err;
  }
};

export const getListMoviesUpComing = async (params?: IParamsGetListMovies) => {
  try {
    const res = await axios.get(
      `${API_URL}/Movies/upcoming${getParams(params)}`
    );
    return res?.data;
  } catch (err) {
    return err;
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/movie/${id}`);
    return res?.data;
  } catch (err) {
    return err;
  }
};
