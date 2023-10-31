import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button, Flex } from '@chakra-ui/react';

import { IModal } from './Modal.types';
import RenderIf from '@components/RenderIf';

const ModalComponent: React.FC<IModal> = ({
  title,
  children,
  onOk,
  okText = 'Simpan',
  okType,
  okVariant,
  roundedOkButton,
  onClose,
  closeText = 'Batal',
  closeType,
  closeVariant = 'ghost',
  colorCloseButton,
  isLoading,
  isDisabled,
  isNoFooter,
  width,
  isNoClose,
  isFooterFull,
  bodyPadding = '4',
  onBack,
  hasShadow,
  ...props
}) => {
  return (
    <Modal scrollBehavior="inside" onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent
        {...(props.size === 'full' && { borderRadius: '0' })}
        minW={width}
        overflow="hidden"
      >
        <Flex
          align="center"
          px="4"
          py="2"
          zIndex="2"
          bg="white"
          roundedTop="md"
          {...(hasShadow && {
            shadow: 'sm',
            transition: 'box-shadow 0.2s, background-color 0.2s',
          })}
          {...(props.isNoHeader && { display: 'none' })}
        >
          {title && (
            <ModalHeader
              fontSize="xl"
              fontFamily="Open Sans, sans-serif"
              fontWeight="bold"
              flex="1"
              p="0"
              marginRight="4"
            >
              {title}
            </ModalHeader>
          )}
          {!isNoClose && (
            <ModalCloseButton
              position="relative"
              top="0"
              right="0"
              color="#808C92"
            />
          )}
        </Flex>
        <ModalBody
          {...(isNoFooter && { pb: bodyPadding === '0' ? '0' : '6' })}
          {...(title && { pt: '0' })}
          px={bodyPadding}
          pt="2"
          {...props.bodyStyle}
        >
          {children}
        </ModalBody>
        <RenderIf isTrue={!!props.footer}>
          <ModalFooter
            px="4"
            py="4"
            {...(isFooterFull && {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            })}
          >
            {props.footer}
          </ModalFooter>
        </RenderIf>
        {!isNoFooter && (
          <ModalFooter
            px="4"
            py="4"
            {...(isFooterFull && {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            })}
          >
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
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

ModalComponent.displayName = 'Modal';
export default ModalComponent;
