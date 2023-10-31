import {
  Box,
  Button,
  Radio,
  RadioGroup,
  StackDivider,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import Drawer from '@components/Drawer';
import { IBaseParams } from '@interfaces/IBaseParam';
import { IOption } from '@interfaces/IOption';
import { memo, useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { IFilterOption } from '../Filter.types';

interface IProps {
  params?: IBaseParams;
  setParams?: (params: IBaseParams) => void;
  options?: IFilterOption[];
}
const FilterOption: React.FC<IProps> = ({
  setParams,
  params,
  options,
}): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [values, setValues] = useState<IFilterOption[]>(options);

  useEffect(() => {
    const newValues = values.map((e) => {
      return {
        ...e,
        value: params[e.code],
      };
    });
    setValues(newValues);
  }, [params]);

  const changeStatusHandler = (code: string, value: string) => {
    const newValues = values.map((e) => {
      if (e.code === code) {
        return { ...e, value: value };
      }
      return e;
    });
    setValues(newValues);
  };

  const handleClickButtonFilter = () => {
    onClose();
    const newParams = {
      ...params,
    };
    values.forEach((e) => {
      newParams[e.code] = e.value;
    });
    setParams(newParams);
  };

  return (
    <>
      <Button
        leftIcon={<FaFilter size="16px" />}
        size="lg"
        px={3}
        variant="outline"
        borderColor="border"
        height="47px"
        onClick={onOpen}
        {...(options?.filter((e) => e.value !== '').length !== 0 && {
          variant: 'solid',
        })}
      >
        Filter
      </Button>

      {isOpen && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          title={`Filter`}
          isCloseable
          hasBorder
          isNoFooter
          footer={
            <Box flex="1">
              <Button size="lg" w="full" onClick={handleClickButtonFilter}>
                Terapkan
              </Button>
            </Box>
          }
        >
          <VStack
            spacing="6"
            align="stretch"
            divider={<StackDivider borderColor="#F1F3F7" borderWidth="3px" />}
          >
            {values?.map((option: IFilterOption, idx: number) => (
              <VStack align="stretch" spacing="4">
                <Text fontWeight="semibold" fontSize="md">
                  {option?.name}
                </Text>
                <RadioGroup
                  onChange={(value) => changeStatusHandler(option?.code, value)}
                  value={option?.value}
                  key={`option-parent-${idx}`}
                  name={`option-parent-${option.code}`}
                >
                  <VStack spacing="4" alignItems="stretch">
                    {option?.childs?.map((ch: IOption, index: number) => (
                      <Radio
                        value={ch.value}
                        key={`option-statue-${idx}-${index}`}
                      >
                        {ch.label}
                      </Radio>
                    ))}
                  </VStack>
                </RadioGroup>
              </VStack>
            ))}
          </VStack>
        </Drawer>
      )}
    </>
  );
};

export default memo(FilterOption);
