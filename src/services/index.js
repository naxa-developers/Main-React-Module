import axios from 'axios';
const { BASE_URL }= process.env;
export const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const authenticated = (apiInstance) => {
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-param-reassign
  apiInstance.defaults.headers.common.Authorization = `Token ${token}`;
  return apiInstance;
};
