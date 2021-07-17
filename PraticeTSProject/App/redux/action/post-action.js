import {GET_POSTS, GET_POSTS_SUCCESS, GET_POST_FAILURE} from '../constant';

export const getPost = () => ({
  type: GET_POSTS,
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
