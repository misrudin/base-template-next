export const PinInput = {
  variants: {
    outline: {
      bg: '#FDFDFD',
      borderColor: 'border',
      h: '64px',
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 'md',
      w: '100%',
      _placeholder: {
        color: 'font.placeholder',
      },
      _invalid: {
        boxShadow: 'none',
        borderColor: 'font.error',
      },
    },
  },
  defaultProps: {
    focusBorderColor: 'font.pencil',
  },
};
