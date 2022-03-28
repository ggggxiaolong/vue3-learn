export interface Item {
  readonly id: number;
  title: string;
  completed: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}

export function filterTodo(filter: Filter, todos: Array<Item>): Array<Item> {
  switch (filter) {
    case Filter.Active:
      return todos.filter((item) => !item.completed);
    case Filter.All:
      return todos;
    case Filter.Completed:
      return todos.filter((item) => item.completed);
  }
}
