import {call, put, select, takeEvery} from 'redux-saga/effects';
import {createPost, getPostAxois} from '../../services/api';
import {
  createPostFailure,
  createPostSuccess,
  getPostFailure,
  getPostSuccess,
} from '../action/post-action';
import {CREATE_POSTS, GET_POSTS} from '../constant';
import {RootReducerInterface} from '../types';

const getPrevPost = (state: RootReducerInterface) => state.postReducer.posts;

function* getPost(action: {type: string; payload: {limit: number}}) {
  try {
    const {
      payload: {limit},
    } = action;
    const prevPosts: any[] = yield select(getPrevPost);
    const posts: any[] = yield call(getPostAxois, {
      limit,
    });
    yield put(getPostSuccess(prevPosts.concat(posts)));
  } catch (error) {
    console.log('error getting post', error);
    yield put(getPostFailure(error.toString()));
  }
}

function* createPosts(action: {
  type: string;
  payload: {title: string; body: string; userId: number};
}) {
  try {
    const {
      payload: {title, body, userId},
    } = action;
    const prevPosts: any[] = yield select(getPrevPost);
    const createdPost: any[] = yield call(createPost, {
      title,
      body,
      userId,
    });
    yield put(createPostSuccess(prevPosts.concat(createdPost)));
  } catch (error) {
    console.log('Error creating post', error);
    yield put(createPostFailure(error.toString()));
  }
}

// WATCHER SAGA FOR ALL POSTS APIS
export default function* watchAllPostSagas() {
  yield takeEvery(GET_POSTS, getPost);
  yield takeEvery(CREATE_POSTS, createPosts);
}

// For test we have exported this
export {getPrevPost, getPost, createPosts};
