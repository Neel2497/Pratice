import {CLEARCOUNTER, DECREMENTCOUNTER, INCREMENTCOUNTER} from '../constant';
import {CounterReducerInterface} from '../types';

const initialState: CounterReducerInterface = {
  count: 0,
};

export default (
  state = initialState,
  {type}: {type: string; payload: null | undefined | number},
) => {
  switch (type) {
    case INCREMENTCOUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENTCOUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    case CLEARCOUNTER:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
