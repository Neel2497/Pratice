import {CounterDecrement, CounterIncrement} from '../../action/counter-action';
import counterReducer from '../counter-reducer';

// TEST CASE FOR INITIAL STATE OF REDUCER
test('should return the initial state', async () => {
  expect(counterReducer(undefined, {})).toEqual({count: 0});
});

// TEST CASE ON INCREMENT COUNTER
test('should handle an increment', () => {
  const previousState = {count: 0};
  expect(counterReducer(previousState, CounterIncrement())).toEqual({
    count: 1,
  });
});

// TEST CASE ON DECREMENT COUNTER
test('should handle an decrement', () => {
  const previousState = {count: 1};
  expect(counterReducer(previousState, CounterDecrement())).toEqual({
    count: 0,
  });
});
