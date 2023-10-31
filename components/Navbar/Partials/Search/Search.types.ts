export interface IFilter {
  title?: string;
  defaultValue?: string;
  loading?: boolean;
  onClear?: () => void;
  onSearch?: (value: string) => void;
  isFullWidth?: boolean;
}
