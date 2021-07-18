const {runSaga} = require('redux-saga');
const {getPost, getPrevPost, createPosts} = require('../post-saga');

import * as api from '../../../services/api';
import {
  createPostFailure,
  createPostSuccess,
  getPostFailure,
  getPostSuccess,
} from '../../action/post-action';

// TEST FOR GET POST FROM THE STORE
test('It should be a simple test', () => {
  const posts = [];
  const state = {postReducer: {posts}};
  const response = getPrevPost(state);
  expect(response).toBe(posts);
});

// TEST FOR GET POST API CALL SUCCESS
test('should handle get post api call success', async () => {
  //Dispatched actions from API call generator functions
  const DispatchedActions = [];

  // We don't want to make API calls while testing so we use mock function of jest
  const mockedSuccessOutput = [
    {id: 1, title: 'title', body: 'body', userId: 1},
  ];
  api.getPostAxois = jest.fn(() => Promise.resolve(mockedSuccessOutput));

  // To test we use fake store
  const fakeStore = {
    getState: () => ({
      postReducer: {
        isLoading: false,
        posts: [],
        error: null,
      },
    }),
    dispatch: action => DispatchedActions.push(action),
  };

  // ACTION IS THE PAYLOAD THAT WE PASS TO GENERATOR FUNCTION TO PASS TO API CALL
  let action = {payload: {limit: 5}};
  await runSaga(fakeStore, getPost, action).done;

  expect(api.getPostAxois.mock.calls.length).toBe(1);
  expect(DispatchedActions).toContainEqual(getPostSuccess(mockedSuccessOutput));
});

// TEST FOR GET POST API CALL FAILURE
test('should handle get post api call failure', async () => {
  //Dispatched actions from API call generator functions
  const DispatchedActions = [];

  // We don't want to make API calls while testing so we use mock function of jest
  const mockedFailureOutput = 'Error getting posts';
  api.getPostAxois = jest.fn(() => Promise.reject(mockedFailureOutput));

  // To test we use fake store
  const fakeStore = {
    getState: () => ({
      postReducer: {
        isLoading: false,
        posts: [],
        error: null,
      },
    }),
    dispatch: action => DispatchedActions.push(action),
  };

  // ACTION IS THE PAYLOAD THAT WE PASS TO GENERATOR FUNCTION TO PASS TO API CALL
  let action = {payload: {limit: 5}};
  await runSaga(fakeStore, getPost, action).done;

  expect(api.getPostAxois.mock.calls.length).toBe(1);
  expect(DispatchedActions).toContainEqual(getPostFailure(mockedFailureOutput));
});

// TEST FOR CREATE POST API CALL SUCCESS
test('should handle create post api call success', async () => {
  //Dispatched actions from API call generator functions
  const DispatchedActions = [];

  // We don't want to make API calls while testing so we use mock function of jest
  const mockedOutput = {title: 'Title', body: 'Body', userId: 1};
  api.createPost = jest.fn(() => Promise.resolve(mockedOutput));

  // To test we use fake store
  const fakeStore = {
    getState: () => ({
      postReducer: {
        isLoading: false,
        posts: [],
        error: null,
      },
    }),
    dispatch: action => DispatchedActions.push(action),
  };

  // ACTION IS THE PAYLOAD THAT WE PASS TO GENERATOR FUNCTION TO PASS TO API CALL
  let action = {payload: {title: 'Title', body: 'Body', userId: 1}};
  await runSaga(fakeStore, createPosts, action).done;

  expect(api.createPost.mock.calls.length).toBe(1);

  const finalMokedOutput = fakeStore
    .getState()
    .postReducer.posts.concat(mockedOutput);
  expect(DispatchedActions).toContainEqual(createPostSuccess(finalMokedOutput));
});

// TEST FOR CREATE POST API CALL FAILURE
test('should handle create post api call failure', async () => {
  //Dispatched actions from API call generator functions
  const DispatchedActions = [];

  // We don't want to make API calls while testing so we use mock function of jest
  const mockedOutput = 'Error creating post';
  api.createPost = jest.fn(() => Promise.reject(mockedOutput));

  // To test we use fake store
  const fakeStore = {
    getState: () => ({
      postReducer: {
        isLoading: false,
        posts: [],
        error: null,
      },
    }),
    dispatch: action => DispatchedActions.push(action),
  };

  // ACTION IS THE PAYLOAD THAT WE PASS TO GENERATOR FUNCTION TO PASS TO API CALL
  let action = {payload: {title: 'Title', body: 'Body', userId: 1}};
  await runSaga(fakeStore, createPosts, action).done;

  expect(api.createPost.mock.calls.length).toBe(1);
  expect(DispatchedActions).toContainEqual(createPostFailure(mockedOutput));
});
