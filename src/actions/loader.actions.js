import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  startAction: ['payload'],
  stopAction: ['payload'],
  refreshActionStart: ['payload'],
  refreshActionStop: ['payload'],
});

export default Creators;
