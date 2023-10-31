import type { ReactNode } from 'react';

import type { IDrawer } from '@components/Drawer/Drawer.types';

export interface IModalConfirmation extends Omit<IDrawer, 'children'> {
  readonly title?: string;
  readonly description?: ReactNode;
  readonly imageUrl?: string;
  readonly children?: ReactNode;
  readonly zIndexOverlay?: number;
  readonly zIndexContent?: number;
  readonly align?: 'left' | 'right' | 'center';
  readonly isFooterGrid?: boolean;
  readonly hasClose?: boolean;
  readonly content?: ReactNode;
  readonly isShadow?: boolean;
}
