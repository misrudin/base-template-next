import { Box, Flex } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';

import { Spinner } from '@chakra-ui/spinner';
import React, { useEffect } from 'react';
import {
  bodyStyled,
  closeStyled,
  contentStyled,
  footerStyled,
  headerStyled,
  overlayStyled,
  titleStyled,
} from '@components/Drawer/Drawer.styles';
import type { IDrawer } from '@components/Drawer/Drawer.types';
import RenderIf from '@components/RenderIf';

import useResponsive from '@hooks/useResponsive';
import { FaChevronLeft } from 'react-icons/fa';
import Modal from '@components/Modal';
import { Button } from '@chakra-ui/react';
import { useWindowSize } from '@hooks/useWindowSize';

const DrawerComponent: React.FC<IDrawer> = ({ ...props }): JSX.Element => {
  const { height } = useWindowSize();
  const { isMobile } = useResponsive();
  const {
    title,
    isCloseable,
    hasBorder,
    isBack,
    action,
    zIndexContent,
    hasShadow = true,
    zIndexOverlay,
    children,
    ptFooter,
    isShadowFooter,
    isLoadingBack,
    isResponsive = true,
    onOk,
    okText = 'Simpan',
    okVariant,
    roundedOkButton,
    onClose,
    closeText = 'Batal',
    closeVariant = 'ghost',
    colorCloseButton,
    isLoading,
    isDisabled,
    isNoFooter,
    onBack,
    bodyPadding = '4',
  } = props;

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.setProperty('margin-right', '0', 'important');
    }
  }, [props.isOpen]);
  return (
    <>
      <RenderIf isTrue={!isMobile && isResponsive}>
        <Modal title={title} onClose={onClose} isCentered {...props}>
          {children}
        </Modal>
      </RenderIf>
      <RenderIf isTrue={isMobile || !isResponsive}>
        <Drawer onClose={onClose} placement="bottom" {...props}>
          <DrawerOverlay
            {...overlayStyled(props.isFullHeight, height)}
            zIndex={zIndexOverlay}
            sx={{ '& + div': { zIndex: zIndexContent } }}
          />
          <DrawerContent
            {...contentStyled(
              props.isFullHeight,
              height,
              props.placement || 'bottom',
            )}
          >
            <RenderIf isTrue={!!title || !!isCloseable}>
              <Flex
                {...titleStyled(
                  isCloseable,
                  hasBorder,
                  props.isFullHeight,
                  hasShadow,
                )}
              >
                <RenderIf isTrue={!!isBack}>
                  <Box onClick={onBack} mr="2" cursor="pointer">
                    {isLoadingBack ? (
                      <Spinner size="sm" />
                    ) : (
                      <FaChevronLeft size={15} />
                    )}
                  </Box>
                </RenderIf>
                <RenderIf isTrue={!!title}>
                  <DrawerHeader {...headerStyled}>{title}</DrawerHeader>
                </RenderIf>
                <RenderIf isTrue={isCloseable}>
                  <DrawerCloseButton
                    data-testid="drawer-close"
                    {...closeStyled(title, props.isFullHeight)}
                  />
                </RenderIf>
                {action}
              </Flex>
            </RenderIf>
            <DrawerBody
              {...bodyStyled(props.isFullHeight, title, isCloseable)}
              {...(isNoFooter && { pb: bodyPadding === '0' ? '0' : '6' })}
              {...(title && { pt: '0' })}
              px={bodyPadding}
              pt="2"
              {...props.bodyStyle}
            >
              {children}
            </DrawerBody>
            <RenderIf isTrue={!!props.footer}>
              <DrawerFooter {...footerStyled(ptFooter, isShadowFooter)}>
                {props.footer}
              </DrawerFooter>
            </RenderIf>
            <RenderIf isTrue={!isNoFooter}>
              <DrawerFooter {...footerStyled(ptFooter, isShadowFooter)}>
                <Button
                  onClick={onBack ? onBack : onClose}
                  size="lg"
                  variant={closeVariant}
                  minW="156px"
                  color={colorCloseButton}
                >
                  {closeText ? closeText : 'Cancel'}
                </Button>
                <Button
                  ml="2"
                  size="lg"
                  onClick={onOk}
                  isDisabled={isDisabled}
                  isLoading={isLoading}
                  variant={okVariant}
                  rounded={roundedOkButton}
                  minW="156px"
                >
                  {okText ? okText : 'Ok'}
                </Button>
              </DrawerFooter>
            </RenderIf>
          </DrawerContent>
        </Drawer>
      </RenderIf>
    </>
  );
};

export default React.memo(DrawerComponent);
