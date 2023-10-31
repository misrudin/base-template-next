export const Textarea = {
  baseStyle: {
    fontFamily: 'body',
    borderRadius: '7px',
  },
  variants: {
    outline: {
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
  sizes: {
    md: {
      fontSize: ['16px', 'sm'],
    },
    lg: {
      px: '4',
      h: '52px',
      fontSize: ['16px', 'sm'],
    },
  },
  defaultProps: {
    focusBorderColor: 'border',
  },
};
