import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/loadersample';

const initialState = {
  dashboardData: '',
  randomNumbers: [],
  randomCharacters: [],
};

const getDashboardSuccess = (state, action) => ({ ...state, dashboardData: action.payload });
const getMoreContentSuccess = (state, action) => {
  return {
    ...state,
    randomNumbers: action.payload.randomNumber
      ? [...state.randomNumbers, action.payload.randomNumber]
      : state.randomNumbers,
    randomCharacters: action.payload.randomCharacter
      ? [...state.randomCharacters, action.payload.randomCharacter]
      : state.randomCharacters,
  };
};

const laoderSampleReducer = createReducer(initialState, {
  [Types.GET_DASHBOARD_SUCCESS]: getDashboardSuccess,
  [Types.GET_MORE_CONTENT_SUCCESS]: getMoreContentSuccess,
});

export default laoderSampleReducer;
