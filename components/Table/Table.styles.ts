import styled from '@emotion/styled';

import { IStyle } from '@components/Table/Table.types';
import colors from '@themes/foundations/colors';

const setHeaderWidth = (widths: string[]): any => {
  return widths.map((e, i) => {
    return {
      [`&:nth-child[${i + 1}]`]: {
        paddingRight: '4',
        borderTopRightRadius: '5px',
        minWidth: e,
      },
    };
  });
};

// console.log(setHeaderWidth(['100px', '200px']));

export const TableStyled = styled.div<IStyle>(
  ({
    pagination,
    isBorderles,
    minWidthCenter,
    minWidthFirst,
    minWidthLast,
    widths,
  }) => ({
    margin: '0',
    table: {
      width: '100%',
      tableLayout: 'fixed',
      display: 'table',
    },
    'td,th': {
      // border: 'none',
      padding: '12px 16px',
      textAlign: 'left',
      background: 'white',
      ...(minWidthCenter && {
        minWidth: minWidthCenter,
      }),
    },
    th: {
      fontFamily: 'var(--font-body) !important',
      fontSize: '15px',
      fontWeight: 'medium',
      border: `2px solid ${colors.bg.border}`,
      '&:first-of-type': {
        paddingLeft: '4',
        borderTopLeftRadius: '5px',
        borderLeft: 'none',
        ...(minWidthFirst && {
          minWidth: minWidthFirst,
        }),
      },
      '&:last-of-type': {
        paddingRight: '4',
        borderTopRightRadius: '5px',
        ...(minWidthLast && {
          minWidth: minWidthLast,
        }),
      },
      ...(widths.length !== 0 && setHeaderWidth(widths)),
      ...(isBorderles && {
        border: 'none !important',
      }),
    },
    td: {
      fontFamily: 'var(--font-body) !important',
      borderBottom: `2px solid ${colors.bg.border}`,
      verticalAlign: 'middle',
      borderLeft: `2px solid ${colors.bg.border}`,
      '&:first-of-type': {
        paddingLeft: '4',
        borderLeft: 'none',
        ...(minWidthFirst && {
          minWidth: minWidthFirst,
        }),
      },
      '&:last-of-type': {
        paddingRight: '4',
        ...(minWidthLast && {
          minWidth: minWidthLast,
        }),
      },
      ...(widths.length !== 0 && setHeaderWidth(widths)),
      ...(isBorderles && {
        border: 'none !important',
      }),
    },
    '.kol-table-row': {
      td: {
        background: '#fff',
      },
    },
    'tr.kol-table-row:hover td': {
      background: colors.bg.gray,
    },
    '.kol-pagination': {
      padding: '16px !important',
    },
    '.kol-table': {
      '&.kol-table-fixed-column': {
        '.kol-table-cell-fix-left': {
          zIndex: '2',
          '&:after': {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '-1px',
            width: '30px',
            transform: 'translate(100%)',
            transition: 'box-shadow .3s',
            content: '""',
            pointerEvents: 'none',
          },
        },
      },
      '&.kol-table-ping-left': {
        '.kol-table-cell-fix-left': {
          '&:after': {
            borderLeft: `1px solid ${colors.border}`,
            ...(isBorderles && {
              border: 'none !important',
            }),
          },
        },
      },
    },
    ...(!pagination && {
      tbody: {
        '& tr:last-of-type': {
          td: {
            '&:first-of-type': {
              borderBottomLeftRadius: '10px',
            },
            '&:last-of-type': {
              borderBottomRightRadius: '10px',
            },
          },
        },
      },
    }),
  }),
);
