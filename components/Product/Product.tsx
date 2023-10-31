import { Box, Image, Text } from '@chakra-ui/react';
import TextLink from '@components/TextLink';
import { memo, useState } from 'react';
import { productStyle } from './Product.styles';
import RenderIf from '@components/RenderIf';
import { IMAGE_LAZY } from '@utils/constant';
import { ribuan } from '@helpers/number';
import { IProductProps } from './Product.types';

const Product: React.FC<IProductProps> = ({
  id,
  isSimple,
  isOneRow,
  width,
  image,
  name,
  brand,
  price,
  discount,
  slug,
  brandSlug,
  priceBeforeDiscount,
  isWishlist,
  isFullWidth,
  isList,
  ...props
}): JSX.Element => {
  const [isOver, setIsOver] = useState<boolean>(false);

  return (
    <TextLink
      link={`/${slug}`}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <Box
        {...productStyle({ isSimple, isOneRow, isFullWidth })}
        {...(width && { w: width })}
        {...props}
        sx={{
          '&:hover': {
            '.text': {
              color: 'font.primary',
            },
          },
        }}
      >
        <Box
          pb="0"
          {...(!isSimple &&
            !isList && {
              aspectRatio: 1 / 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: '1',
            })}
        >
          <Image
            className="img-product"
            src={image + '?width=400'}
            alt={name}
            fallbackSrc={IMAGE_LAZY}
            objectFit="contain"
            objectPosition="center"
            w="full"
            h="110px"
            aspectRatio={1 / 1}
            transition=".5s"
            {...(isSimple && {
              w: '82px',
              h: '58px',
              minW: '82px',
              transform: isOver ? 'scale(1.19)' : 'scale(1)',
            })}
            {...(isOneRow && {
              w: '176px',
              h: '124px',
              minW: '176px',
              transform: isOver ? 'scale(1.1)' : 'scale(1)',
            })}
            {...(isFullWidth && {
              w: 'full',
              height: '124px',
              minW: 'unset',
            })}
            {...(isList && {
              w: 'full',
              h: 'unset',
              transform: isOver ? 'scale(1.1)' : 'scale(1)',
              aspectRatio: 1.3 / 1,
            })}
          />
        </Box>
        <Box w="full" {...(!isSimple && { px: '2' })}>
          <Text
            {...(!isSimple && {
              mt: '4',
              fontSize: 'md',
              fontWeight: 'normal',
              mb: '0',
              height: '33px',
            })}
            fontSize="sm"
            fontWeight="medium"
            mb="1"
            whiteSpace="pre-wrap"
            className="text"
            lineHeight="110%"
            {...(isList && { textAlign: 'center', height: 'unset' })}
            {...(!isList && { noOfLines: 2 })}
          >
            {name}
          </Text>
          <RenderIf isTrue={!isSimple && !isList}>
            <Text mt="2" noOfLines={2} fontSize="xs" color="font.pencil">
              {brand}
            </Text>
          </RenderIf>
          <RenderIf isTrue={priceBeforeDiscount > price}>
            <Text
              display="inline-flex"
              color="font.placeholder"
              alignItems="flex-start"
              fontSize="xs"
              w="full"
              {...(isList && { justifyContent: 'center' })}
              textDecor="line-through"
            >
              Rp {ribuan(priceBeforeDiscount || 0)}
            </Text>
          </RenderIf>
          <Text
            display="inline-flex"
            color="font.pencil"
            alignItems="flex-start"
            fontSize="sm"
            className="text"
            w="full"
            {...(isList && { justifyContent: 'center' })}
          >
            Rp {ribuan(price || 0)}
          </Text>
        </Box>
      </Box>
    </TextLink>
  );
};

export default memo(Product);
