import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/register';

const initialState = {
  loading: false,
};

const registerUserRequest = (state) => ({ ...state, loading: true });

const registerUserSuccess = (state) => {
  return { ...state, loading: false };
};

const registerUserFailure = (state) => ({
  ...state,
  loading: false,
});

const registerReducer = createReducer(initialState, {
  [Types.REGISTER_USER_REQUEST]: registerUserRequest,
  [Types.REGISTER_USER_SUCCESS]: registerUserSuccess,
  [Types.REGISTER_USER_FAILURE]: registerUserFailure,
});

export default registerReducer;
