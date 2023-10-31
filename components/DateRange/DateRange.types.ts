import { Moment } from 'moment';
import { RangePickerProps } from 'rc-picker';

export interface IDateRange
  extends Omit<
    RangePickerProps<Moment>,
    'picker' | 'locale' | 'generateConfig'
  > {
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | undefined;
  value?: any;
  defaultValue?: any;
  isIconLeft?: boolean;
  isSearch?: boolean;
  isActive?: boolean;
}
