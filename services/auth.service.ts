import axios from 'axios';
import { IParamsLogin, IParamsSignUp } from '@/common/interface/auth.interface';
import { API_URL } from './constant.service';

export const login = async ({ email, password }: IParamsLogin) => {
  try {
    const res = await axios.post(`${API_URL}/Auth/log-in`, {
      email,
      password,
    });
    if (res) {
      localStorage.setItem('token', res?.data?.authenticationToken);
      localStorage.setItem('dataUser', JSON.stringify(res?.data?.user || {}));
    }
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};

export const register = async ({
  name,
  email,
  phoneNumber,
  password,
}: IParamsSignUp) => {
  try {
    const res = await axios.post(`${API_URL}/Auth/sign-up`, {
      name,
      email,
      phoneNumber,
      password,
    });
    if (res) {
      localStorage.setItem('token', res?.data?.authenticationToken);
    }
    return { ...res?.data, success: true };
  } catch (err) {
    return err;
  }
};
