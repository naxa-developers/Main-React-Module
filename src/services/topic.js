import { api } from './index';

const getTopic = (payload) => api.get('pokemon?offset=0&limit=1118/', payload);
export default getTopic;
