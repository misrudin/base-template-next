import { Box } from '@chakra-ui/layout';
import { Dayjs } from 'dayjs';
import Picker from 'rc-picker';
import generateConfig from 'rc-picker/lib/generate/dayjs';
import en_US from 'rc-picker/lib/locale/en_US';
import { FC, ReactElement, memo } from 'react';

import type { ITimePicker } from './TimePicker.types';
import { FiClock } from 'react-icons/fi';

export const TimePicker: FC<ITimePicker> = ({
  value,
  defaultValue,
  picker = 'time',
  isIconLeft,
  isSearch,
  ...props
}): ReactElement => (
  <Box position="relative" flex="1">
    <Picker<Dayjs>
      prefixCls="kol-picker"
      picker={picker}
      generateConfig={generateConfig}
      locale={en_US}
      inputReadOnly
      value={value}
      defaultValue={defaultValue}
      className="kol-time-picker"
      showSecond={false}
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
      transform="translateY(-50%)"
      {...(isIconLeft ? { left: '4' } : { right: '4' })}
    >
      <FiClock size={20} {...(isSearch && { color: '#808C92', size: 18 })} />
    </Box>
  </Box>
);

export default memo(TimePicker);
