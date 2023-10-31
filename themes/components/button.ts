export const Button = {
  baseStyle: {
    fontWeight: '400',
    borderRadius: '7px',
    fontFamily: 'body',
  },
  sizes: {
    sm: {
      px: '2',
      h: '7',
      lineHeight: '130%',
    },
    md: {
      px: '6',
      h: '9',
    },
    lg: {
      px: '6',
      h: '44px',
      fontSize: 'md',
      lineHeight: '44px',
    },
    xl: {
      px: '8',
      h: '54px',
      fontSize: 'md',
    },
  },
  variants: {
    solid: {
      bg: 'button.primary.default',
      _hover: {
        bg: 'button.primary.hover',
        color: 'white',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    ghost: {
      bg: 'gray.50',
      color: 'black',
      boxShadow: 'none',
      _hover: {
        bg: 'gray.200',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    danger: {
      bg: 'red.500',
      color: 'white',
      _hover: {
        bg: 'red.600',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    info: {
      bg: 'font.orange',
      color: 'white',
      _hover: {
        bg: 'orange.500',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    outline: {
      boxShadow: 'none',
      color: 'font.primary',
      borderColor: 'font.primary',
      _hover: {
        bg: 'bg.primary',
        color: 'white',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    outlineGray: {
      boxShadow: 'none',
      color: 'font.darken',
      border: '1px',
      borderColor: 'blackAlpha.200',
      _hover: {
        bg: 'button.secondary.default',
        color: 'font.primary',
        borderColor: 'font.primary',
        boxShadow: '2px 10px 20px rgba(46, 67, 77, 0.1)',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
      _active: {
        bg: 'button.secondary.default',
        color: 'font.primary',
        borderColor: 'font.primary',
      },
    },
    outlineRed: {
      boxShadow: 'none',
      color: 'font.red',
      border: '1px',
      borderColor: 'red.500',
      _hover: {
        bg: 'red.500',
        color: 'white',
        borderColor: 'red.500',
        boxShadow: '2px 10px 20px rgba(46, 67, 77, 0.1)',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
      _active: {
        bg: 'red.500',
        color: 'white',
        borderColor: 'red.500',
      },
    },
    link: {
      boxShadow: 'none',
      color: 'font.primary',
    },
  },
};
