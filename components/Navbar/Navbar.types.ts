export interface INavbarItem {
  readonly title?: string;
  readonly link?: string;
  readonly icon?: string;
  readonly isSelected?: boolean;
  readonly isTarget?: boolean;
  readonly isAnchor?: boolean;
  readonly isMulti?: boolean;
  readonly isMobile?: boolean;
  readonly menus?: INavbarItem[];
  readonly height?: string;
  readonly isLine?: boolean;
}

export interface INavbar {
  readonly menuSelected?: string;
  readonly isNoShadow?: boolean;
}
