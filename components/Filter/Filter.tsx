import { Box, Button, Stack } from '@chakra-ui/react';
import { memo, useMemo } from 'react';
import { FilterDate, FilterOption } from './Partials';
import Search from '@components/Search';
import { IFilter } from './Filter.types';
import { FiX } from 'react-icons/fi';
import { initialParams } from '@interfaces/IBaseParam';

const Fitler: React.FC<IFilter> = ({
  params,
  setParams,
  isSearch,
  isDate,
  isOption,
  options,
  buttons,
}): JSX.Element => {
  const onFilterSearch = (value: string) => {
    setParams({ ...params, search: value });
  };

  const isReset = useMemo(() => {
    const isOption = options?.filter((e) => e.value !== '').length !== 0;
    const isDateFilter =
      !!params?.filterDateType &&
      params?.filterDateType !== '' &&
      params?.filterDateType !== 'all';
    return isOption || isDateFilter;
  }, [params]);

  const handleReset = () => {
    setParams(initialParams);
  };

  return (
    <Stack spacing="4" direction="row" overflow="hidden">
      {isSearch && (
        <Box flex="1">
          <Search
            onSearch={onFilterSearch}
            onClear={() => onFilterSearch('')}
            isFullWidth
            defaultValue={params?.search}
          />
        </Box>
      )}
      {isDate && <FilterDate setParams={setParams} params={params} />}
      {isOption && (
        <FilterOption setParams={setParams} params={params} options={options} />
      )}
      {(isDate || isOption) && isReset && (
        <Button
          size="lg"
          px={3}
          variant="outlineRed"
          borderColor="border"
          height="47px"
          onClick={handleReset}
        >
          <FiX />
        </Button>
      )}
      {buttons &&
        buttons?.map((button, index) => (
          <Button
            size="lg"
            height="47px"
            key={`filter-button-${index}`}
            {...button.props}
          >
            {button.text}
          </Button>
        ))}
    </Stack>
  );
};

export default memo(Fitler);
