import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { IFormControl } from '@components/FormControl/FormControl.types';

const FormControlComponent: React.FC<IFormControl> = ({
  label,
  sublabel,
  help,
  extra,
  children,
  isOptional,
  colorExtra = 'font.ink',
  sizeExtra,
  isRequired,
  isLoading,
  ...props
}): JSX.Element => {
  return (
    <FormControl {...props}>
      <FormLabel {...(!label && { mb: '0' })}>
        <Flex align="center">
          {label}
          {isOptional && (
            <Text
              as="span"
              fontSize="xs"
              color="font.pencil"
              fontWeight="normal"
              ml="1"
            >
              (opsional)
            </Text>
          )}
          {isRequired && (
            <Text
              as="span"
              fontSize="xs"
              color="font.red"
              fontWeight="normal"
              ml="1"
            >
              (*)
            </Text>
          )}
          {isLoading && <Spinner size="xs" ml="2" />}
        </Flex>
        {sublabel && (
          <Text fontSize="xs" color="font.pencil" fontWeight="normal">
            {sublabel}
          </Text>
        )}
      </FormLabel>
      <Box flex="1">
        {children}
        {extra && (
          <FormHelperText color={colorExtra} fontSize={sizeExtra}>
            {extra}
          </FormHelperText>
        )}
        {help && <FormErrorMessage>{help}</FormErrorMessage>}
      </Box>
    </FormControl>
  );
};

export default FormControlComponent;
