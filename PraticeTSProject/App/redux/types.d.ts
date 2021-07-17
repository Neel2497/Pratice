export interface PostReducerInterface {
  isLoading: boolean;
  posts: any[];
  error: null | string;
}

export interface TodoReducerInterface {
  todo: {index: number; value: string}[];
}

export interface CounterReducerInterface {
  count: number;
}

export interface RootReducerInterface {
  counter: CounterReducerInterface;
  todo: TodoReducerInterface;
  postReducer: PostReducerInterface;
}
