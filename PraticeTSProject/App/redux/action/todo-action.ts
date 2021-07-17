interface AddTodoPayload {
  text: string;
  id: number;
}
interface DeleteTodoPayload {
  id: number;
}
export const AddTodo = (payload: AddTodoPayload) => ({
  type: 'ADD',
  payload,
});

export const DeleteTodo = (payload: DeleteTodoPayload) => ({
  type: 'DELETE',
  payload,
});
