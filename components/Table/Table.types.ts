import { TableProps } from 'rc-table/lib/Table';

export interface ITable<RecordType extends object = any>
  extends TableProps<RecordType> {
  pagination?: boolean;
  defaultCurrent?: number;
  current?: number;
  total?: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (current: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  disabled?: boolean;
  totalBoundaryShowSizeChanger?: number;
  pageSizeOptions?: string[];
  onShowSizeChange?: (current: number, size: number) => void;
  hideOnSinglePage?: boolean;
  showPrevNextJumpers?: boolean;
  showQuickJumper?: boolean;
  showTotal?: (total: number, range: [number, number]) => void;
  className?: string;
  simple?: any;
  locale?: any;
  style?: any;
  showLessItems?: boolean;
  showTitle?: boolean;
  isLoading?: boolean;
  isNotBack?: boolean;
  isBorderles?: boolean;
  isSimple?: boolean;
  isScroll?: boolean;
  forceScrolling?: boolean;
  minWidthCenter?: string;
  minWidthFirst?: string;
  minWidthLast?: string;
  widths?: string[];
  isEmptyKickCredit?: boolean;
}

export interface IStyle {
  pagination?: boolean;
  isBorderles?: boolean;
  minWidthCenter?: string;
  minWidthFirst?: string;
  minWidthLast?: string;
  widths?: string[];
}
