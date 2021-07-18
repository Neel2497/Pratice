import {
  CREATE_POSTS,
  CREATE_POSTS_FAILURE,
  CREATE_POSTS_SUCCESS,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POST_FAILURE,
} from '../constant';
import {PostReducerInterface} from '../types';

const initialState: PostReducerInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

interface actionTypes {
  type: string;
  payload: {
    posts: any[];
    error: string;
  };
}

export default (state = initialState, {type, payload}: actionTypes) => {
  switch (type) {
    case GET_POSTS:
    case CREATE_POSTS:
      return {...state, isLoading: true, error: null};

    case GET_POSTS_SUCCESS:
    case CREATE_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        posts: payload.posts,
      };

    case GET_POST_FAILURE:
    case CREATE_POSTS_FAILURE:
      return {...state, isLoading: false, error: payload.error};

    default:
      return state;
  }
};
