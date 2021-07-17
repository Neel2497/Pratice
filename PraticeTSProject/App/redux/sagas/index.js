import {takeEvery} from 'redux-saga/effects';
import {GET_POSTS} from '../constant';
import {getPost} from './post-saga';

// Watcher Saga
function* rootSaga() {
  yield takeEvery(GET_POSTS, getPost);
}

export default rootSaga;
