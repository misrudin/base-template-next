import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import isEmpty from 'lodash/isEmpty';
import React, { useState } from 'react';

import { IFilter } from '@components/Search/Search.types';
import { FiSearch, FiX } from 'react-icons/fi';

const Search: React.FC<IFilter> = ({
  title = 'Search',
  defaultValue,
  loading,
  isFullWidth,
  onSearch,
  isAutoSearch,
  ...props
}) => {
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
    if (isAutoSearch) {
      onSearch && onSearch(keyword);
    }
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
      {...(!isFullWidth && { maxW: '260px' })}
      width={{ base: 'full', md: 'full' }}
    >
      <InputGroup size="md" alignItems="center">
        <InputLeftElement
          h="full"
          pointerEvents="none"
          children={<FiSearch size={18} color="#808C92" />}
        />
        <Input
          h="48px"
          value={search}
          disabled={loading}
          placeholder={title}
          onChange={onChangeSearch}
          onKeyUp={onKeyUpSearch}
          pr="44px"
          borderRadius="5px"
          size="md"
        />
        {isFill && (
          <InputRightElement
            h="full"
            children={
              <Flex
                w="20px"
                h="20px"
                borderRadius="50%"
                bg="border"
                align="center"
                justify="center"
                cursor="pointer"
                onClick={handleOnClear}
              >
                <FiX color="#808C92" size={7} />
              </Flex>
            }
          />
        )}
      </InputGroup>
    </Box>
  );
};

export default Search;
