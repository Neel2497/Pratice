import {CLEARCOUNTER, DECREMENTCOUNTER, INCREMENTCOUNTER} from '../constant';

export const CounterIncrement = () => ({
  type: INCREMENTCOUNTER,
  payload: null,
});

export const CounterDecrement = () => ({
  type: DECREMENTCOUNTER,
  payload: null,
});

export const CounterClear = () => ({
  type: CLEARCOUNTER,
  payload: null,
});
