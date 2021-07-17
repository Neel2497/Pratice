export interface TodoReducerInterface {
  todo: {index: number; value: string}[];
}

export interface CounterReducerInterface {
  count: number;
}

export interface RootReducerInterface {
  counter: CounterReducerInterface;
  todo: TodoReducerInterface;
}
