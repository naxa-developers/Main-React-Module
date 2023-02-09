import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getDashboardRequest: null,
  getDashboardSuccess: ['payload'],

  getMoreContentRequest: ['payload', 'key'],
  getMoreContentSuccess: ['payload'],
});

export default Creators;
