import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_BASE_URL;

const createApiClient = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: API_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const apiClient = axios.create(config);

  apiClient.interceptors.request.use((requestConfig) => {
    if (requestConfig.headers) {
      requestConfig.headers.apikey = API_KEY;
    }
    return requestConfig;
  });

  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response) {
        const { status } = error.response;
        console.error('API Error:', status);
        return Promise.reject(new Error('Ошибка сервера. Попробуйте позже'));
      } else if (error.request) {
        console.error('Network Error:', error.message);
        return Promise.reject(new Error('Сервер не отвечает. Проверьте подключение к интернету.'));
      } else {
        console.error('Request Setup Error:', error.message);
        return Promise.reject(new Error('Ошибка при отправке запроса.'));
      }
    },
  );

  return apiClient;
};

export const apiClient = createApiClient();
