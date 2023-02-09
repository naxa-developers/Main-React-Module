import { call, put, takeLatest } from 'redux-saga/effects';
import registerUser from '@Services/register';
import registerActions, { Types } from '@Actions/register';
import toastActions from '@Actions/toast';
import loaderActions from '@Actions/loader.actions';
import withLoader from '@Utils/loaderWrapper';

export function* registerUserRequest(action) {
  const { type, payload } = action;
  try {
    yield call(registerUser, payload);
    yield put(registerActions.registerUserSuccess());
    yield put(toastActions.success({ message: 'You have been registered successfully.' }));
  } catch (error) {
    yield put(registerActions.registerUserFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  } 
}

function* registerWatcher() {
  yield takeLatest(Types.REGISTER_USER_REQUEST, withLoader(registerUserRequest));
}

export default registerWatcher;
