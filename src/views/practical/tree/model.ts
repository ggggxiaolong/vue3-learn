export interface Item {
  readonly name: string;
  children?: Array<Item>;
}
