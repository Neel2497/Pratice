import {CounterReducerInterface} from '../types';

const initialState: CounterReducerInterface = {
  count: 0,
};

const CounterReducer = (
  state = initialState,
  {type}: {type: string; payload: null | undefined | number},
) => {
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'CLEAR':
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default CounterReducer;
