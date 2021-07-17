import CounterReducer from './counter-reducer';
import {combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import {RootReducerInterface} from '../types';

const RootReducer = combineReducers<RootReducerInterface>({
  counter: CounterReducer,
  todo: todoReducer,
});

export default RootReducer;
