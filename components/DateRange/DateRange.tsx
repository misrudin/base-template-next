import { Box } from '@chakra-ui/react';
import { Moment } from 'moment';
import { RangePicker } from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/moment';
import id_ID from 'rc-picker/lib/locale/id_ID';
import React, { useRef } from 'react';

import { IDateRange } from './DateRange.types';
import { FaCalendarAlt } from 'react-icons/fa';

export const DateRange: React.FC<IDateRange> = ({
  value = null,
  defaultValue = null,
  picker = 'date',
  isIconLeft,
  isSearch,
  ...props
}) => {
  const rangePickerRef = useRef<RangePicker<Moment>>(null);
  return (
    <Box position="relative">
      <RangePicker<Moment>
        picker={picker}
        prefixCls="kol-picker"
        generateConfig={generateConfig}
        locale={id_ID}
        value={value}
        defaultValue={defaultValue}
        ref={rangePickerRef}
        placeholder={['Pilih tanggal', 'Pilih tanggal']}
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
        fontSize="20px"
        transform="translateY(-50%)"
        {...(isIconLeft ? { left: '4' } : { right: '4' })}
        {...(isSearch && { color: '#808C92', fontSize: '18px' })}
      >
        <FaCalendarAlt />
      </Box>
    </Box>
  );
};
