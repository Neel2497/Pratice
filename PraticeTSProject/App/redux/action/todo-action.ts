import {ADDTODO, DELETETODO} from '../constant';

interface AddTodoPayload {
  text: string;
  id: number;
}
interface DeleteTodoPayload {
  id: number;
}
export const AddTodo = (payload: AddTodoPayload) => ({
  type: ADDTODO,
  payload,
});

export const DeleteTodo = (payload: DeleteTodoPayload) => ({
  type: DELETETODO,
  payload,
});
