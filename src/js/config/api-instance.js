import axios from 'axios';
import Config from './config';
import Utils from '../utils/utils';

const Instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

Instance.interceptors.request.use(
  (config) => {
    const token = Utils.getUserToken(Config.USER_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default Instance;
