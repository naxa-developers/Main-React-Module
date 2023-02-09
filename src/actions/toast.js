import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    success: ['payload'],
    error: ['payload'],
    clear: null,
  },
  { prefix: 'TOAST/' },
);

export default Creators;
