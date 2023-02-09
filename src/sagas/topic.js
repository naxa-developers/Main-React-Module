import { call, put, takeLatest } from 'redux-saga/effects';
import getTopic from '@Services/topic';
import toastActions from '@Actions/toast';
import topicActions, { Types } from '@Actions/topic';
import loaderActions from '@Actions/loader.actions';

export function* getTopicRequest(action) {
  const { type, payload } = action;
  try {
   
    const response = yield call(getTopic);
    // yield delay(5000);
    yield put(topicActions.getTopicSuccess({ data: response.data }));
    yield put(toastActions.success({ message: 'Get Form List Data' }));
  } catch (error) {
    yield put(topicActions.getTopicFailure());
    yield put(toastActions.error({ message: error?.response?.data?.message }));
  }
}

function* topicWatcher() {
  yield takeLatest(Types.GET_TOPIC_REQUEST, withLoader(getTopicRequest));
}

export default topicWatcher;
