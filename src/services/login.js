import { api } from './index';

const loginUser = (payload) => api.post('/login/', payload);
export default loginUser;
