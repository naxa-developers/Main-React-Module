import { put, takeLatest, delay, takeEvery } from 'redux-saga/effects';
import loadersampleActions, { Types } from '@Actions/loadersample';
import toastActions from '@Actions/toast';
import loaderActions from '@Actions/loader.actions';
import withLoader from '@Utils/loaderWrapper';

function getMoreContent(payload) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let toReturn;
  if (payload === 'randomCharacter') {
    toReturn = characters.charAt(Math.floor(Math.random() * charactersLength));
  } else {
    toReturn = Math.random();
  }
  return toReturn;
}

export function* getDashboardRequest(action) {
  try {
    yield delay(2000);
    yield put(loadersampleActions.getDashboardSuccess('This is Dashboard Data '));
    yield put(toastActions.success({ message: `Succeefully fetched Dashboard Data` }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}
export function* getMoreContentRequest(action) {
  const { payload } = action;
  try {
    yield delay(2000);
    yield put(loadersampleActions.getMoreContentSuccess({ [payload]: getMoreContent(payload) }));
  } catch (error) {
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}
function* registerWatcher() {
  yield takeLatest(Types.GET_DASHBOARD_REQUEST, withLoader(getDashboardRequest));
  yield takeEvery(Types.GET_MORE_CONTENT_REQUEST, withLoader(getMoreContentRequest));
}

export default registerWatcher;
