import { Spinner } from '@chakra-ui/react';
import Select, { Option, SelectProps } from 'rc-select';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const SelectComponent: React.FC<SelectProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Select
      animation="slide-up"
      prefixCls="kol-select"
      showSearch
      filterOption={true}
      optionFilterProp="children"
      inputIcon={
        props.loading ? (
          <Spinner size="sm" mt="2" />
        ) : (
          <FiChevronDown size={20} />
        )
      }
      {...props}
    >
      {children}
    </Select>
  );
};

export default SelectComponent;
export { Option };
