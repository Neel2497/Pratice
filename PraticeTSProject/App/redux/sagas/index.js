import {all} from 'redux-saga/effects';
import watchAllPostSagas from './post-saga';

// Watcher Saga
function* rootSaga() {
  yield all([watchAllPostSagas()]);
}

export default rootSaga;
