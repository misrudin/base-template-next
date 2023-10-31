import { BoxProps } from '@chakra-ui/react';

export interface IProductProps extends BoxProps {
  readonly id?: string;
  readonly isSimple?: boolean;
  readonly isOneRow?: boolean;
  readonly width?: string;
  readonly image?: string;
  readonly name?: string;
  readonly brand?: string;
  readonly slug?: string;
  readonly brandSlug?: string;
  readonly categoryslug?: string;
  readonly price?: number;
  readonly priceBeforeDiscount?: number;
  readonly discount?: number;
  readonly isWishlist?: boolean;
  readonly isFullWidth?: boolean;
  readonly isList?: boolean;
}
