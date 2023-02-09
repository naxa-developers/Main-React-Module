/* eslint-disable no-console */
import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/topic';

const initialState = {
  topics: [
    { id: 1, title: 'Education', checked: true },
    { id: 2, title: 'Arts', checked: true },
    { id: 3, title: 'Science', checked: false },
    { id: 4, title: 'Music', checked: false },
  ],
};

const handleTopicAdd = (state, action) => {
  const { payload } = action;
  const topics = [...state.topics, { id: state?.topics?.length + 1, title: payload, checked: false }];
  return {
    ...state,
    topics,
  };
};

const handleTopicSelect = (state, action) => {
  const { payload: e } = action;
  const {
    target: { id, checked },
  } = e;
  const topics = state.topics.map((item) => (item.id === +id ? { ...item, checked } : { ...item }));
  return {
    ...state,
    topics,
  };
};
const getTopicSuccess = (state) => {
  return {
    ...state,
  };
};

const topicReducer = createReducer(initialState, {
  [Types.ADD_TOPIC]: handleTopicAdd,
  [Types.GET_TOPIC_SUCCESS]: getTopicSuccess,
  [Types.SELECT_TOPIC]: handleTopicSelect,
});

export default topicReducer;
