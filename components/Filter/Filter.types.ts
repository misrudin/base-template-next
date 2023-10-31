import { ButtonProps } from '@chakra-ui/react';
import { IBaseParams } from '@interfaces/IBaseParam';
import { IOption } from '@interfaces/IOption';

export interface IFilterOption {
  code: string;
  name: string;
  value: string;
  childs: IOption[];
}

export interface IFilter {
  params?: IBaseParams;
  setParams?: (params: IBaseParams) => void;
  isSearch?: boolean;
  isDate?: boolean;
  buttons?: { text: string; props: ButtonProps }[];
  onClick?: string;
  isOption?: boolean;
  options?: IFilterOption[];
}
