import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  registerUserRequest: ['payload'],
  registerUserSuccess: ['payload'],
  registerUserFailure: ['payload'],
});

export default Creators;
