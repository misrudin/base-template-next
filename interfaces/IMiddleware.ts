export interface IMiddleware<T> {
  redirect?: {
    destination: string;
    permanent: boolean;
  };
  props?: T | {};
}
