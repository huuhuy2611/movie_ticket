import axios from 'axios';
import { API_URL } from './constant.service';

export const createReserve = async (params: any) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${API_URL}/Reservations`, params, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const createPayment = async (reservationId: string, params: any) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(
      `${API_URL}/Reservations/${reservationId}/payment`,
      params,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};
