import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import Table, { Summary } from 'rc-table';
import React from 'react';

import Empty from '@components/Empty';
import Loading from '@components/Loading';
import Pagination from '@components/Pagination';
import { TableStyled } from '@components/Table/Table.styles';
import { ITable } from '@components/Table/Table.types';

const TableComponent: React.FC<ITable> = ({
  pagination = true,
  isLoading,
  isScroll = true,
  forceScrolling = false,
  isEmptyKickCredit,
  ...props
}) => {
  const paginationProps = {
    defaultCurrent: props?.defaultCurrent,
    current: Number(props?.current),
    total: props?.total,
    defaultPageSize: props?.defaultPageSize,
    pageSize: props.pageSize ? props.pageSize : 0,
    onChange: props?.onChange,
    showSizeChanger: true,
    disabled: props?.disabled,
    totalBoundaryShowSizeChanger: props?.totalBoundaryShowSizeChanger,
    onShowSizeChange: props?.onShowSizeChange,
    hideOnSinglePage: props?.hideOnSinglePage,
    showPrevNextJumpers: props?.showPrevNextJumpers,
    showQuickJumper: props?.showQuickJumper,
    className: props?.className,
    simple: props?.simple,
    style: props?.style,
    showLessItems: true,
    showTitle: props?.showTitle,
  };

  const RenderEmpty = () => (
    <Empty
      title={!props.isSimple && 'Oops...'}
      imageUrl={
        isEmptyKickCredit
          ? 'https://www.kickavenue.com/static/media/no-transaction.c9e5dde6.png'
          : 'https://www.kickavenue.com/static/media/dashboard-empty-state.2f906523.jpg'
      }
      description='"Belum ada data untuk ditampilkan."'
    >
      {!props.isNotBack && (
        <Link href="/" passHref>
          <Button mt="10" size="lg" px="6" rounded="full">
            Refresh
          </Button>
        </Link>
      )}
    </Empty>
  );

  return (
    <Loading isLoading={isLoading}>
      <TableStyled
        minWidthCenter={props.minWidthCenter}
        minWidthFirst={props.minWidthFirst}
        minWidthLast={props.minWidthLast}
        isBorderles={props.isBorderles}
        pagination={pagination}
        widths={props.widths ?? []}
      >
        <Table
          prefixCls="kol-table"
          {...props}
          {...(isScroll &&
          !isLoading &&
          props?.data &&
          props?.data?.length !== 0
            ? { scroll: { x: true } }
            : forceScrolling
            ? { scroll: { x: true } }
            : {})}
          emptyText={!isLoading && RenderEmpty}
        />
        {pagination && (
          <Pagination
            showTotal={(total, range) =>
              `${range[0]} - ${range[1]} of ${total} Data`
            }
            {...paginationProps}
          />
        )}
      </TableStyled>
    </Loading>
  );
};

export default TableComponent;
export { Summary };
