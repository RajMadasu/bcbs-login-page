import axios from 'axios';

const serviceInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

serviceInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject({
      message: 'Api Error',
      data: error,
    });
  },
);

serviceInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject({
      message: 'API error',
      data: error,
    });
  },
);

export default serviceInstance;
