import { createReducer } from 'reduxsauce';
import { Types } from '../actions/loader.actions';
import persist from '../utils/persist';

const initialState = {
  loader: {
    actions: [],
    refreshing: [],
  },
};

const startAction = (state, { payload }) => ({
  ...state,
  loader: {
    ...state.loader,
    actions: [...state.loader.actions, payload.action],
  },
});
const stopAction = (state, { payload }) => {
  return {
    ...state,
    loader: {
      ...state.loader,
      actions: state.loader.actions.filter((action) => JSON.stringify(action) !== JSON.stringify(payload.action)),
    },
  };
};
const refreshActionStart = (state, { payload }) => ({
  ...state,
  loader: {
    ...state.loader,
    refreshing: [...state.loader.refreshing, payload.refreshAction],
  },
});
const refreshActionStop = (state, { payload }) => ({
  ...state,
  loader: {
    ...state.loader,
    refreshing: state.loader.refreshing.filter((refresh) => refresh !== payload.refreshAction),
  },
});

const loaderReducer = createReducer(initialState, {
  [Types.START_ACTION]: startAction,
  [Types.STOP_ACTION]: stopAction,
  [Types.REFRESH_ACTION_START]: refreshActionStart,
  [Types.REFRESH_ACTION_STOP]: refreshActionStop,
});
export default persist('loader', [], loaderReducer);
