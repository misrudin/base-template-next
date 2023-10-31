export interface ITitle<T = {}> {
  readonly title: string;
  readonly description: string;
  readonly keyword: string;
  readonly params?: T;
}
