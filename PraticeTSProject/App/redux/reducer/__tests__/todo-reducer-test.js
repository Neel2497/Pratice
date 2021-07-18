const {AddTodo, DeleteTodo} = require('../../action/todo-action');
const {default: todoReducer} = require('../todo-reducer');

// TEST CASE FOR INITIAL STATE OF REDUCER
test('should return initial state', () => {
  expect(todoReducer(undefined, {})).toEqual({
    todo: [],
  });
});

// TEST CASE ADD TODO
test('should handle add todo', () => {
  const previousState = {todo: [{value: 'old Todo', index: 1}]};
  expect(
    todoReducer(previousState, AddTodo({text: 'New Todo', id: 2})),
  ).toEqual({
    todo: [
      {
        value: 'old Todo',
        index: 1,
      },
      {
        value: 'New Todo',
        index: 2,
      },
    ],
  });
});

// TEST CASE TO DELETE TODO
test('should handle add todo', () => {
  const previousState = {
    todo: [
      {
        value: 'old Todo',
        index: 1,
      },
      {
        value: 'New Todo',
        index: 2,
      },
    ],
  };
  expect(todoReducer(previousState, DeleteTodo({id: 1}))).toEqual({
    todo: [
      {
        value: 'New Todo',
        index: 2,
      },
    ],
  });
});
