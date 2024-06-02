import axios from 'axios';
// import Config from "react-native-config";
import {getRefreshToken} from '../Utils/utils';
import {store} from '../Redux/store';
import Config from 'react-native-config';

// const BASE_URL = Config.BASE_URL!;
const BASE_URL = 'https://api.weatherapi.com';
const API_KEY = '9a00060cb15148079db101851240106';
// const API_KEY = Config.API_KEY!;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let cancelTokenSource = axios.CancelToken.source();

axiosInstance.interceptors.request.use(
  async config => {
    config.url = `${config.url}&key=${API_KEY}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      (error?.response?.status === 401 || error?.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const accessToken = await getRefreshToken(
          store.getState().auth.refreshToken,
        );
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {}
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
