import {call, put, select} from 'redux-saga/effects';
import {getPostAxois} from '../../services/api';
import {getPostFailure, getPostSuccess} from '../action/post-action';
import {RootReducerInterface} from '../types';

const getPrevPost = (state: RootReducerInterface) => state.postReducer.posts;

function* getPost() {
  // console.warn('Post Saga');
  try {
    const prevPosts: any[] = yield select(getPrevPost);
    const posts: any[] = yield call(getPostAxois, {limit: 5});
    yield put(getPostSuccess(prevPosts.concat(posts)));
  } catch (error) {
    console.log('error getting post', error);
    yield put(getPostFailure(error.toString()));
  }
}

export {getPost};
