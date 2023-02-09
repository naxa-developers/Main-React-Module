import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTopic: ['payload'],
  selectTopic: ['payload'],
  getTopicRequest: ['payload'],
  getTopicSuccess: ['payload'],
  getTopicFailure: ['payload'],
});

export default Creators;
