import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { FiSearch, FiX } from 'react-icons/fi';
import { IFilter } from './Search.types';

const SearchInput: React.FC<IFilter> = ({
  title = 'Search',
  defaultValue,
  loading,
  isFullWidth,
  onSearch,
  ...props
}): JSX.Element => {
  const [search, setSearch] = useState<string>(defaultValue);
  const [isFill, setIsFill] = useState<boolean>(!isEmpty(defaultValue));
  const onKeyUpSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch && onSearch(search);
    }
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: keyword } = e.target;
    setSearch(keyword);
    setIsFill(!isEmpty(keyword));
  };

  const handleOnClear = () => {
    setSearch('');
    setIsFill(false);
    if (props.onClear) {
      props.onClear();
    }
  };
  return (
    <Box
      w="full"
      {...(!isFullWidth ? { maxW: '300px' } : { w: 'full', flex: '1' })}
    >
      <InputGroup size="md">
        <InputLeftElement color="font.pencil" pointerEvents="none">
          <FiSearch size={16} />
        </InputLeftElement>
        <Input
          value={search}
          disabled={loading}
          placeholder={title}
          onChange={onChangeSearch}
          onKeyUp={onKeyUpSearch}
          pr="44px"
          borderRadius="full"
          size="md"
          border="none"
          bg="bg.gray"
        />
        {isFill && (
          <InputRightElement>
            <Flex
              w="20px"
              h="20px"
              align="center"
              justify="center"
              cursor="pointer"
              onClick={handleOnClear}
              color="font.darken"
            >
              <FiX size={13} />
            </Flex>
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
};

export default memo(SearchInput);
