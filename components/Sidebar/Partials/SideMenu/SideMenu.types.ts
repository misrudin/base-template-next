import { FC, ReactNode } from 'react';

export interface ISideMenu {
  Item: FC<ISideMenuItem>;
  Parent: FC<ISideMenuParent>;
  Divider: FC<ISideMenuParent>;
  Sub: FC<ISideMenuSub>;
}

export interface ISideMenuItem {
  isSelected?: boolean;
  link: any;
  title: string;
  icon?: ReactNode;
  isSubMenu?: boolean;
}

export interface ISideMenuSub {
  isSelected?: boolean;
  title: string;
  icon?: ReactNode;
  isStroke?: boolean;
  children?: ReactNode;
  link?: any;
}

export interface ISideMenuParent {
  title?: string;
  children?: ReactNode;
}
