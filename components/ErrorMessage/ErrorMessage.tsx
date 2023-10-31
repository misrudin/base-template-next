import { FormErrorMessage } from '@chakra-ui/react';
import React from 'react';

interface IErrorMessage {
  readonly message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }): JSX.Element => {
  if (message) {
    return <FormErrorMessage fontSize="xs">{message}</FormErrorMessage>;
  }
  return null;
};

export default React.memo(ErrorMessage);
