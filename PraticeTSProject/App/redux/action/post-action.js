import {
  CREATE_POSTS,
  CREATE_POSTS_FAILURE,
  CREATE_POSTS_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POST_FAILURE,
} from '../constant';

export const getPost = payload => ({
  type: GET_POSTS,
  payload,
});

export const getPostSuccess = payload => ({
  type: GET_POSTS_SUCCESS,
  payload: {
    posts: payload,
  },
});

export const getPostFailure = payload => ({
  type: GET_POST_FAILURE,
  payload: {
    error: payload,
  },
});

export const createPost = payload => ({
  type: CREATE_POSTS,
  payload,
});

export const createPostSuccess = payload => ({
  type: CREATE_POSTS_SUCCESS,
  payload: {
    posts: payload,
  },
});

export const createPostFailure = payload => ({
  type: CREATE_POSTS_FAILURE,
  payload: {
    error: payload,
  },
});
