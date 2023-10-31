export const Tabs = {
  parts: ['tab', 'tabpanel'],
  baseStyle: {
    fontFamily: 'body',
    tabpanel: {
      p: '4',
      mt: '0',
    },
    tab: {
      _selected: {
        color: 'font.primary',
        borderBottomColor: 'font.primary',
      },
    },
  },
  variants: {
    line: {
      tab: {
        color: 'font.pencil',
        fontSize: 'sm',
        fontWeight: 'normal',
        _selected: {
          fontWeight: 'bold',
        },
      },
    },
  },
};
