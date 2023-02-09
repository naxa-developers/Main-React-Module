import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loginRequest: ['payload'],
  loginSuccess: ['payload'],
  loginFailure: ['payload'],

  logoutRequest: null,
  logoutSuccess: null,
  logoutFailure: null,
});

export default Creators;
