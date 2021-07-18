const {
  getPostSuccess,
  getPostFailure,
  getPost,
  createPost,
} = require('../../action/post-action');
const {default: postReducer} = require('../post-reducer');

// TEST CASE FOR INITIAL STATE OF REDUCER
test('should return the initial state', () => {
  expect(postReducer(undefined, {})).toEqual({
    isLoading: false,
    posts: [],
    error: null,
  });
});

// TEST CASE ON INITIALIZING API CALL FOR GET POST AND CREATE POST
test('should handle state on requested of get post and create post API call', () => {
  const previousState = {
    isLoading: false,
    posts: [],
    error: null,
  };

  expect(postReducer(previousState, getPost())).toEqual({
    isLoading: true,
    posts: [],
    error: null,
  });

  expect(postReducer(previousState, createPost())).toEqual({
    isLoading: true,
    posts: [],
    error: null,
  });
});

// TEST CASE FOR EFFECT OF GET POST API SUCCESS
test('should handle state on success of get post API call', () => {
  const previousState = {
    isLoading: false,
    posts: [],
    error: null,
  };

  expect(
    postReducer(
      previousState,
      getPostSuccess([{userId: 1, title: 'Title', body: 'Body'}]),
    ),
  ).toEqual({
    isLoading: false,
    posts: [{userId: 1, title: 'Title', body: 'Body'}],
    error: null,
  });
});

// TEST CASE FOR EFFECT OF GET POST API FAILURE
test('should handle state on failure of get post API call', () => {
  const previousState = {
    isLoading: false,
    posts: [],
    error: null,
  };
  expect(
    postReducer(previousState, getPostFailure('Error getting posts')),
  ).toEqual({
    isLoading: false,
    posts: [],
    error: 'Error getting posts',
  });
});
