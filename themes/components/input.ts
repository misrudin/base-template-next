export const Input = {
  parts: ['field'],
  baseStyle: {
    fontFamily: 'body',
    borderRadius: '7px',
  },
  variants: {
    outline: {
      field: {
        bg: '#FDFDFD',
        borderColor: 'border',
        _placeholder: {
          color: 'font.placeholder',
        },
        _invalid: {
          boxShadow: 'none',
          borderColor: 'font.error',
        },
        _disabled: {
          opacity: 1,
          bg: 'bg.disabled',
          color: 'font.pencil',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: ['16px', 'sm'],
      },
    },
    lg: {
      field: {
        px: '4',
        h: '52px',
        fontSize: ['16px', 'sm'],
      },
    },
  },
  defaultProps: {
    focusBorderColor: 'border',
  },
};
