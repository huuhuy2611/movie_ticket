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

export const getListMoviesSimilar = async (idMovie: string) => {
  try {
    const res = await axios.get(`${API_URL}/Movies/${idMovie}/similar-movies`);
    return { data: res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const getMovieDetails = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/Movies/${id}`);
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const getCinemasByMovie = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/Movies/${id}/available-cinemas`);
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const getDatesByMovie = async (idMovie: string, params?: any) => {
  try {
    let queryParams = '';
    if (params) {
      queryParams = getParams(params);
    }
    const res = await axios.get(
      `${API_URL}/Movies/${idMovie}/available-dates${queryParams}`
    );
    return { data: [...res?.data], success: true };
  } catch (err) {
    return err;
  }
};

export const getSchedulesByMovie = async (idMovie: string, params?: any) => {
  try {
    let queryParams = '';
    if (params) {
      queryParams = getParams(params);
    }
    const res = await axios.get(
      `${API_URL}/Movies/${idMovie}/schedules${queryParams}`
    );
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const getSeatsByRoom = async (roomId: string) => {
  try {
    const res = await axios.get(`${API_URL}/Cinemas/rooms/${roomId}`);
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

// review movies

export const getReviewByMovie = async (movieId: string) => {
  try {
    const res = await axios.get(`${API_URL}/Movies/${movieId}/reviews`);
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const postReviewByMovie = async (movieId: string, data: any) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/Movies/${movieId}/reviews`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const getHistoryBuyTicket = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}/Reservations`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};
