import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { DrawerCloseButton } from '@chakra-ui/modal';

import Drawer from '@components/Drawer';
import {
  closeButtonStyled,
  footerStyled,
  titleWrapperStyled,
} from '@components/ModalConfirmation/ModalConfirmation.styles';
import type { IModalConfirmation } from '@components/ModalConfirmation/ModalConfirmation.types';
import RenderIf from '@components/RenderIf';
import useResponsive from '@hooks/useResponsive';

import { IMAGE_LAZY } from '@utils/constant';

const ModalConfirmation = ({
  title,
  description,
  imageUrl,
  zIndexContent,
  zIndexOverlay,
  align = 'center',
  isFooterGrid,
  hasClose,
  content,
  isShadow,
  ...props
}: IModalConfirmation): JSX.Element => {
  const { isMobile } = useResponsive();
  return (
    <Drawer
      isNoFooter
      placement="bottom"
      zIndexContent={zIndexContent}
      zIndexOverlay={zIndexOverlay}
      {...props}
      footer={
        <Stack {...footerStyled({ isFooterGrid, isShadow })}>
          {props.footer}
        </Stack>
      }
    >
      <Image src={imageUrl} alt={title} fallbackSrc={IMAGE_LAZY} mx="auto" />
      {content}
      <Flex {...titleWrapperStyled({ hasClose })}>
        <Heading as="h4" fontSize={isMobile ? 'md' : 'lg'} textAlign={align}>
          {title}
        </Heading>
        <RenderIf isTrue={hasClose}>
          <DrawerCloseButton onClick={props.onClose} {...closeButtonStyled} />
        </RenderIf>
      </Flex>
      <Text textAlign={align}>{description}</Text>
      <RenderIf isTrue={!!props.children}>
        <Box mt="4">{props.children}</Box>
      </RenderIf>
    </Drawer>
  );
};

export default ModalConfirmation;
