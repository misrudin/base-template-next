import { Flex, Spinner, Text } from '@chakra-ui/react';
import { default as UploadComponent } from 'rc-upload';
import React from 'react';

import {
  descriptionStyled,
  iconStyled,
  titleStyled,
  uploadStyled,
} from '@components/Upload/Upload.styles';
import { BsFillCameraFill } from 'react-icons/bs';

const Upload: React.FC<any> = ({
  title,
  icon,
  isLoading,
  imageUrl,
  heightWrapper,
  widthWrapper,
  description,
  formik,
  ...props
}): JSX.Element => {
  return (
    <UploadComponent
      disabled={isLoading}
      onChange={formik?.handleChange}
      {...props}
    >
      <Flex
        {...uploadStyled({ heightWrapper, widthWrapper, imageUrl, isLoading })}
      >
        {imageUrl ? (
          <Flex {...iconStyled}>
            <BsFillCameraFill size={24} color="white" />
          </Flex>
        ) : isLoading ? (
          <Spinner color="red.500" />
        ) : (
          <>
            <BsFillCameraFill size={24} color="red" />
            <Text {...titleStyled}>{title}</Text>
            {description && <Text {...descriptionStyled}>{description}</Text>}
          </>
        )}
      </Flex>
    </UploadComponent>
  );
};

Upload.displayName = 'Upload';

export default React.memo(Upload);
