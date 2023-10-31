import {
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialog as AlertDialogComponent,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import { IAlert } from '@components/AlertDialog/AlertDialog.types';
import RenderIf from '@components/RenderIf';

const AlertDialog: React.FC<IAlert> = ({
  title,
  children,
  onOk,
  okText = 'Simpan',
  onClose,
  closeText = 'Batal',
  isLoading,
  isDisabled,
  leastDestructiveRef,
  withButton = true,
  dangerMode = false,
  ...props
}): JSX.Element => {
  const cancelRef: any = useRef();
  return (
    <AlertDialogComponent
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
      size="sm"
      {...props}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <Flex align="center" p="6">
          <AlertDialogHeader
            fontFamily="Open Sans, sans-serif"
            fontWeight="semibold"
            flex="1"
            p="0"
            marginRight="4"
          >
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton
            position="relative"
            top="0"
            right="0"
            color="#808C92"
          />
        </Flex>
        <AlertDialogBody py="0" px="6">
          {children}
        </AlertDialogBody>
        <RenderIf isTrue={withButton}>
          <AlertDialogFooter
            display="grid"
            gap="4"
            gridTemplateColumns="1fr 1fr"
            p="6"
          >
            <Button
              size="lg"
              ref={cancelRef}
              onClick={onClose}
              variant="ghost"
              w="full"
            >
              {closeText}
            </Button>
            <Button
              size="lg"
              onClick={onOk}
              isDisabled={isDisabled}
              isLoading={isLoading}
              w="full"
              {...{ variant: dangerMode ? 'danger' : 'solid' }}
            >
              {okText}
            </Button>
          </AlertDialogFooter>
        </RenderIf>
      </AlertDialogContent>
    </AlertDialogComponent>
  );
};

export default AlertDialog;
