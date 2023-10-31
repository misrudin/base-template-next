import {
  Box,
  Button,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { DatePicker } from '@components/DatePicker';
import Drawer from '@components/Drawer';
import { IBaseParams } from '@interfaces/IBaseParam';
import { IOption } from '@interfaces/IOption';
import { filterDateOption } from '@utils/constant';
import dayjs from 'dayjs';
import moment from 'moment';
import { memo, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface IProps {
  params?: IBaseParams;
  setParams?: (params: IBaseParams) => void;
}
const FilterDate: React.FC<IProps> = ({ params, setParams }): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [startDateFilter, setStartDateFilter] = useState<
    dayjs.Dayjs | undefined
  >(params?.start_date ? dayjs(params?.start_date) : undefined);
  const [endDateFilter, setEndDateFilter] = useState<dayjs.Dayjs | undefined>(
    params?.end_date ? dayjs(params?.end_date) : undefined,
  );
  const [filterType, setFilterType] = useState<string>(
    params?.filterDateType || 'all',
  );

  const handleClickButtonFilter = () => {
    onClose();
    const start = startDateFilter ? startDateFilter.format('YYYY-MM-DD') : '';
    const end = endDateFilter ? endDateFilter.format('YYYY-MM-DD') : '';
    const newParams = {
      ...params,
      start_date: start,
      end_date: end,
      filterDateType: filterType,
    };
    if (filterType === 'all') {
      newParams.start_date = '';
      newParams.end_date = '';
    }
    setParams(newParams);
  };
  return (
    <>
      <Button
        size="lg"
        px={3}
        leftIcon={<FaCalendarAlt size="16px" />}
        variant="outline"
        borderColor="border"
        onClick={onOpen}
        {...(params?.filterDateType !== 'all' &&
          params?.filterDateType !== '' && {
            variant: 'solid',
          })}
        height="47px"
      >
        {params?.filterDateType === 'custom' &&
          `${startDateFilter?.format('YYYY-MM-DD')} ~ ${endDateFilter?.format(
            'YYYY-MM-DD',
          )}`}
        {(params?.filterDateType !== 'custom' &&
          filterDateOption?.find((e) => e.value === filterType)?.label) ||
          ''}
      </Button>

      {isOpen && (
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          title={`Filter Tanggal`}
          isCloseable
          hasBorder
          isNoFooter
          footer={
            <Box flex="1">
              <Button
                isDisabled={
                  filterType !== 'all' && (!startDateFilter || !endDateFilter)
                }
                size="lg"
                w="full"
                onClick={handleClickButtonFilter}
              >
                Terapkan
              </Button>
            </Box>
          }
        >
          <VStack spacing="4" alignItems="stretch">
            <RadioGroup
              onChange={(e) => {
                const value = e as string;
                setFilterType(value);
                switch (value) {
                  case 'month':
                    const s = moment().subtract(29, 'd').format('YYYY-MM-DD');
                    const e = moment().format('YYYY-MM-DD');
                    setStartDateFilter(dayjs(s));
                    setEndDateFilter(dayjs(e));
                    break;
                  case '3month':
                    const startDate = moment()
                      .subtract(3, 'months')
                      .format('YYYY-MM-DD');
                    const endDate = moment().format('YYYY-MM-DD');
                    setStartDateFilter(dayjs(startDate));
                    setEndDateFilter(dayjs(endDate));
                    break;
                }
              }}
              value={filterType}
              defaultValue={params?.filterDateType}
            >
              <VStack spacing="4" alignItems="stretch">
                {filterDateOption?.map((option: IOption, index: number) => (
                  <Radio key={`date-option-${index}`} value={option.value}>
                    {option.label}
                  </Radio>
                ))}
              </VStack>
            </RadioGroup>
            {filterType === 'custom' && (
              <HStack spacing="4" w="full">
                <Box>
                  <Text as="label" fontSize="10px" color="font.pencil">
                    Mulai Dari
                  </Text>
                  <DatePicker
                    value={startDateFilter ?? undefined}
                    onChange={setStartDateFilter}
                    placeholder="Pilih Tanggal"
                  />
                </Box>
                <Box>
                  <Text as="label" fontSize="10px" color="font.pencil">
                    Sampai
                  </Text>
                  <DatePicker
                    value={endDateFilter ?? undefined}
                    onChange={setEndDateFilter}
                    placeholder="Pilih Tanggal"
                  />
                </Box>
              </HStack>
            )}
          </VStack>
        </Drawer>
      )}
    </>
  );
};

export default memo(FilterDate);
