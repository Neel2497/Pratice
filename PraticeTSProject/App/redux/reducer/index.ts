import {combineReducers} from 'redux';
import {RootReducerInterface} from '../types';

//Reducers
import todoReducer from './todo-reducer';
import counterReducer from './counter-reducer';
import postReducer from './post-reducer';

const RootReducer = combineReducers<RootReducerInterface>({
  counter: counterReducer,
  todo: todoReducer,
  postReducer: postReducer,
});

export default RootReducer;
