import { put } from 'redux-saga/effects';
import loaderActions from '@src/actions/loader.actions';

export default function withLoader(func) {
  return function* loaderActionWrappper(action) {
    const obj = {
      actionName: action.type,
    };
    if (action.key) {
      obj.key = action.key;
    }
    try {
      yield put(
        loaderActions.startAction({
          action: obj,
        }),
      );
      yield func(action);
    } catch (err) {
      /* eslint-disable-next-line */
      console.log(err);
    } finally {
      /* eslint-disable-next-line */
      console.log('finally', obj);
      yield put(
        loaderActions.stopAction({
          action: obj,
        }),
      );
    }
  };
}
