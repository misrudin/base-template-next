import { Box } from '@chakra-ui/react';
import { Moment } from 'moment';
import Picker from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/moment';
import en_US from 'rc-picker/lib/locale/en_US';
import React from 'react';

import { IDatepicker } from '@components/DatePicker/DatePicker.types';
import { FiCalendar } from 'react-icons/fi';

export const DatePicker: React.FC<IDatepicker> = ({
  value,
  defaultValue,
  picker = 'date',
  isIconLeft,
  isSearch,
  ...props
}) => {
  return (
    <Box position="relative" w="full">
      <Picker<Moment>
        prefixCls="kol-picker"
        picker={picker}
        generateConfig={generateConfig}
        locale={en_US}
        inputReadOnly
        value={value}
        defaultValue={defaultValue}
        {...(isIconLeft && {
          className: 'kol-picker-icon-left',
        })}
        {...(isSearch &&
          isIconLeft && {
            className: 'kol-picker-icon-left kol-picker-search',
          })}
        {...props}
      />
      <Box
        position="absolute"
        top="50%"
        pointerEvents="none"
        transform="translateY(-50%)"
        {...(isIconLeft ? { left: '4' } : { right: '4' })}
      >
        <FiCalendar
          size={20}
          {...(isSearch && { color: '#808C92', size: 18 })}
        />
      </Box>
    </Box>
  );
};
