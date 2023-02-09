import { api } from './index';

const registerUser = (payload) => api.post('/register/', payload);
export default registerUser;
