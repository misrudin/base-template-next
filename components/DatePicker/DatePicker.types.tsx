import { PickerProps } from 'rc-picker';

export interface IDatepicker
  extends Omit<PickerProps<any>, 'picker' | 'locale' | 'generateConfig'> {
  picker?: 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year';
  value?: any;
  defaultValue?: any;
  isIconLeft?: boolean;
  isSearch?: boolean;
}
