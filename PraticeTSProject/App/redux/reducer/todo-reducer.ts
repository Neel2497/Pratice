import {TodoReducerInterface} from '../types';

interface actionType {
  type: string;
  payload: {
    text: string;
    id: number;
  };
}

const initialState: TodoReducerInterface = {
  todo: [],
};

export default (state = initialState, {type, payload}: actionType) => {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        todo: state.todo.concat({
          index: payload.id,
          value: payload.text,
        }),
      };
    case 'DELETE':
      return {
        ...state,
        todo: state.todo.filter(value => value.index !== payload.id),
      };
    default:
      return state;
  }
};
