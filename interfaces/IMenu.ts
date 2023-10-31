export interface IMenu {
  name?: string;
  code?: string;
  route?: string;
  icon?: any;
  isParent?: boolean;
  isMulti?: boolean;
  child?: IMenu[];
  isDivider?: boolean;
}
