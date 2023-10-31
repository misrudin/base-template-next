import ReactDayPickerStyle from './components/react-day-picker';

export const styles = {
  global: () => ({
    '::-webkit-scrollbar': {
      display: 'none',
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',

    body: {
      color: 'font.ink',
      bg: 'white',
      fontSize: '14px',
      fontFamily: 'body',
      overflowX: 'hidden',
    },
    '*::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
      position: 'absolute',
    },
    '*::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px white',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(#b8b8b8, .3)',
      borderRadius: '2px',
      transition: '.3s',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#b8b8b8',
      borderRadius: '2px',
    },
    '& *:focus': {
      boxShadow: 'none !important',
      outline: '0 !important',
    },
    '& .chakra-select > *:first-of-type': {
      color: 'font.pencil',
    },
    mark: {
      backgroundColor: '#FFC400',
      color: 'font.ink',
    },
    '#nprogress': { pointerEvents: 'none' },
    '#nprogress .bar': {
      background: 'bg.primary',
      position: 'fixed',
      zIndex: 1031,
      top: '0',
      left: '0',
      width: '100%',
      height: '3px',
    },
    '#nprogress .peg': {
      display: 'block',
      position: 'absolute',
      right: '0px',
      width: '100px',
      height: '100%',
      boxShadow: '0 0 10px bg.primary, 0 0 5px bg.primary',
      opacity: 1,
      WebkitTransform: 'rotate(3deg) translate(0px, -4px)',
      msTransform: 'rotate(3deg) translate(0px, -4px)',
      transform: 'rotate(3deg) translate(0px, -4px)',
    },
    '#nprogress .spinner': {
      display: 'block',
      position: 'fixed',
      zIndex: 1031,
      top: '15px',
      right: '15px',
    },
    '#nprogress .spinner-icon': {
      width: '18px',
      height: '18px',
      boxSizing: 'border-box',
      border: 'solid 2px transparent',
      borderTopColor: 'bg.primary',
      borderLeftColor: 'bg.primary',
      borderRadius: '50%',
      WebkitAnimation: 'nprogress-spinner 400ms linear infinite',
      animation: 'nprogress-spinner 400ms linear infinite',
    },
    '.nprogress-custom-parent': { overflow: 'hidden', position: 'relative' },
    '.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar':
      {
        position: 'absolute',
      },
    '@-webkit-keyframes nprogress-spinner': {
      '0%': { WebkitTransform: 'rotate(0deg)' },
      '100%': { WebkitTransform: 'rotate(360deg)' },
    },
    '@keyframes nprogress-spinner': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '.chakra-toast__inner': {
      width: 'calc(100% - 32px)',
      fontSize: '14px',
    },
    '.signCanvas': {
      width: '100%',
      height: '336px',
    },
    '.pac-container': {
      boxShadow: '0px 6px 12px rgba(46, 67, 77, 0.1)',
      borderRadius: '0',
      border: 0,
      fontFamily: 'body',
      top: '56px !important',
      width: '100% !important',
      maxWidth: '500px',
      margin: '0 auto',
      left: '50% !important',
      transform: 'translateX(-50%)',
      background: 'white',
      height: 'calc(100vh - 56px - 16px)',
      maxHeight: 'calc(100vh - 56px - 16px)',
    },
    '.small-map .pac-container': {
      zIndex: '99999',
    },
    '.pac-icon': {
      margin: 0,
      backgroundColor: '#F0F0F0',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      // backgroundImage: `url(${configEnv.assetBaseUrl}/icons/marker.svg) !important`,
      backgroundPosition: 'center center',
      backgroundSize: '20px',
      backgroundRepeat: 'no-repeat',
    },
    '.pac-item': {
      border: '0',
      cursor: 'pointer',
      fontSize: '12px',
      padding: '12px 16px',
      paddingBottom: 0,
      '.pac-item-query': {
        fontFamily: 'body',
        fontSize: '16px',
        fontWeight: 600,
        paddingLeft: '16px',
        paddingRight: '0',
        top: '-4px',
        position: 'relative',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '+ span': {
          display: 'block',
          marginLeft: '52px',
          lineHeight: '1.5',
          marginTop: '-8px',
          borderBottom: '1px solid #DEE3ED',
          paddingBottom: '12px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    '.custom-checkbox': {
      '.chakra-checkbox__control': {
        background: 'white',
        borderColor: 'font.primary',
      },
    },
    '.box-tnc': {
      '& ol, & ul': {
        paddingLeft: '16px',
        marginTop: '8px',
      },
    },
    '.my-cursor': {
      maxW: '1px',
      overflow: 'hidden',
      bg: 'white',
      maxH: '35px',
      display: 'inline-block',
    },
    ...ReactDayPickerStyle,
    '.kol-select': {
      width: '100%',
      position: 'relative !important',
      cursor: 'pointer',
    },
    '.kol-select-disabled, .kol-select-disabled input': {
      cursor: 'not-allowed !important',
      bg: 'bg.disabled !important',
    },
    '.kol-select-disabled .kol-select-selector': {
      background: 'bg.disabled !important',
      cursor: 'not-allowed !important',
    },
    '.kol-select-show-arrow.kol-select-loading .kol-select-arrow-icon::after': {
      boxSizing: 'border-box',
      width: 12,
      height: 12,
      borderRadius: '100%',
      border: '2px solid #999',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: 'none',
      marginTop: 2,
      animation: 'rcSelectLoadingIcon 0.5s infinite',
    },
    '.kol-select.kol-select-multiple .kol-select-selection-placeholder': {
      position: 'absolute',
      top: '50%',
      right: '16px',
      left: '16px',
      transform: 'translateY(-50%)',
      transition: 'all .3s',
    },
    '.kol-select .kol-select-selection-placeholder': {
      color: 'font.placeholder',
      pointerEvents: 'none',
    },
    '.kol-select .kol-select-selection-search-input': {
      appearance: 'none',
      boxShadow: 'none !important',
      border: 'none !important',
      backgroundColor: 'transparent',
      fontSize: '16px',
    },
    '.kol-select .kol-select-selection-search-input:focus': {
      appearance: 'none',
      boxShadow: 'none !important',
      border: 'none !important',
    },
    '.kol-select .kol-select-selection-search-input::-webkit-search-cancel-button':
      {
        display: 'none',
        appearance: 'none',
      },
    '.kol-select-single .kol-select-selector': {
      display: 'flex',
      position: 'relative',
    },
    '.kol-select-single .kol-select-selector .kol-select-selection-search': {
      position: 'absolute',
      left: '12px',
      right: '40px',
    },
    '.kol-select-single .kol-select-selector .kol-select-selection-search-input':
      {
        width: '100%',
      },
    '.kol-select-single .kol-select-selector .kol-select-selection-item, .kol-select-single .kol-select-selector .kol-select-selection-placeholder':
      {
        padding: '0',
        lineHeight: '46px',
        transition: 'all .3s',
        flex: '1',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        paddingRight: '24px',
        zIndex: 1,
      },
    '.kol-select-single:not(.kol-select-customize-input) .kol-select-selector':
      {
        width: '100%',
        minWidth: 0,
        outline: '2px solid transparent',
        outlineOffset: 2,
        position: 'relative',
        appearance: 'none',
        fontSize: 'sm',
        padding: '0 16px',
        height: '48px',
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'border',
        background: '#FDFDFD',
      },
    '.kol-select-multiple .kol-select-selector': {
      width: '100%',
      minWidth: 0,
      outline: '2px solid transparent',
      outlineOffset: 2,
      position: 'relative',
      appearance: 'none',
      fontSize: 'sm',
      padding: '0 16px',
      minHeight: '48px',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'border',
      background: '#FDFDFD',
      display: 'flex',
      flexWrap: 'wrap',
    },
    '.kol-select-single:not(.kol-select-customize-input) .kol-select-selector .kol-select-selection-search-input':
      {
        width: '100%',
        height: '46px',
        lineHeight: '46px',
        cursor: 'pointer',
      },
    '.kol-select-single.kol-select-show-search:not(.kol-select-customize-input) .kol-select-selector .kol-select-selection-search-input':
      {
        cursor: 'text',
      },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-item': {
      position: 'relative',
      display: 'flex',
      flex: 'none',
      boxSizing: 'border-box',
      maxWidth: '100%',
      height: '32px',
      marginTop: '7px',
      background: 'white',
      borderRadius: 'full',
      cursor: 'default',
      transition: 'font-size .3s,line-height .3s,height .3s',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      paddingLeft: 3,
      paddingRight: 3,
      marginRight: 1,
      alignItems: 'center',
      color: 'font.ink',
      border: '1px',
      borderColor: 'font.ink',
    },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-item-disabled':
      {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-overflow':
      {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-overflow-item':
      {
        flex: 'none',
        maxWidth: '100%',
      },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-search': {
      position: 'relative',
      maxWidth: '100%',
    },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-search-mirror':
      {
        zIndex: 999,
        whiteSpace: 'nowrap',
        position: 'absolute',
        left: 0,
        top: 0,
        visibility: 'hidden',
      },
    '.kol-select-multiple .kol-select-selector .kol-select-selection-search-input':
      {
        width: '100%',
        height: '46px',
      },
    '.kol-select-multiple .kol-select-selection-item-remove': {
      marginLeft: 1,
      cursor: 'pointer',
    },
    '.kol-select-allow-clear.kol-select-multiple .kol-select-selector': {
      paddingRight: '20px',
    },
    '.kol-select-allow-clear:hover .kol-select-clear': {
      opacity: 1,
      background: 'white',
    },
    '.kol-select-dropdown .kol-select-tree': {
      padding: '0 16px',
    },
    '.kol-select-allow-clear .kol-select-clear': {
      position: 'absolute',
      right: '3',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10,
      opacity: '0',
      cursor: 'pointer',
      fontSize: '25px',
      width: '20px',
    },
    '.kol-select-show-arrow.kol-select-multiple .kol-select-selector': {
      paddingRight: '20px',
    },
    '.kol-select-show-arrow .kol-select-arrow': {
      pointerEvents: 'none',
      position: 'absolute',
      right: '3',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '.kol-select-show-arrow .kol-select-arrow-icon::after': {
      content: "''",
      border: '5px solid transparent',
      width: 0,
      height: 0,
      display: 'inline-block',
      borderTopColor: '#999',
      transform: 'translateY(5px)',
    },
    '.kol-select-focused .kol-select-selector': {
      borderColor: 'font.primary !important',
    },
    '.kol-select-dropdown': {
      padding: '8px 0',
      position: 'absolute',
      background: 'white',
      borderRadius: 'md',
      boxShadow: 'md',
      zIndex: '14001',
      width: 'auto !important',
      transition: 'all .3s',
    },
    '.kol-select-dropdown-hidden': {
      display: 'none',
    },
    '.kol-select-item': {
      fontSize: 14,
      lineHeight: '1.5',
      padding: '8px 16px',
    },
    '.kol-select-item-group': {
      fontWeight: 'bold',
    },
    '.kol-select-item-option': {
      position: 'relative',
      cursor: 'pointer',
    },
    '.kol-select-item-option-grouped': {
      paddingLeft: 24,
    },
    '.kol-select-item-option-selected': {
      fontWeight: 700,
    },
    '.kol-select-item-option .kol-select-item-option-state': {
      position: 'absolute',
      right: 0,
      top: '4px',
      pointerEvents: 'none',
      display: 'none',
    },
    '.kol-select-item-option-active': {
      background: 'blue.50',
      color: 'font.primary',
    },
    '.kol-select-item-option-disabled': {
      color: '#999',
    },
    '.kol-select-item-empty': {
      textAlign: 'center',
      color: '#999',
    },
    '.kol-select-selection__choice-zoom': {
      transition: 'all 0.3s',
    },
    '.kol-select-selection__choice-zoom-appear': {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    '.kol-select-selection__choice-zoom-appear.kol-select-selection__choice-zoom-appear-active':
      {
        opacity: 1,
        transform: 'scale(1)',
      },
    '.kol-select-selection__choice-zoom-leave': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '.kol-select-selection__choice-zoom-leave.kol-select-selection__choice-zoom-leave-active':
      {
        opacity: 0,
        transform: 'scale(0.5)',
      },
    '.kol-select-dropdown-slide-up-enter, .kol-select-dropdown-slide-up-appear':
      {
        animationDuration: '0.3s',
        animationFillMode: 'both',
        transformOrigin: '0 0',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(0.08,0.82,0.17,1)',
        animationPlayState: 'paused',
      },
    '.kol-select-dropdown-slide-up-leave': {
      animationDuration: '0.3s',
      animationFillMode: 'both',
      transformOrigin: '0 0',
      opacity: 1,
      animationTimingFunction: 'cubic-bezier(0.6,0.04,0.98,0.34)',
      animationPlayState: 'paused',
    },
    '.kol-select-dropdown-slide-up-enter.kol-select-dropdown-slide-up-enter-active.kol-select-dropdown-placement-bottomLeft, .kol-select-dropdown-slide-up-appear.kol-select-dropdown-slide-up-appear-active.kol-select-dropdown-placement-bottomLeft':
      {
        animationName: 'rcSelectDropdownSlideUpIn',
        animationPlayState: 'running',
      },
    '.kol-select-dropdown-slide-up-leave.kol-select-dropdown-slide-up-leave-active.kol-select-dropdown-placement-bottomLeft':
      {
        animationName: 'rcSelectDropdownSlideUpOut',
        animationPlayState: 'running',
      },
    '.kol-select-dropdown-slide-up-enter.kol-select-dropdown-slide-up-enter-active.kol-select-dropdown-placement-topLeft, .kol-select-dropdown-slide-up-appear.kol-select-dropdown-slide-up-appear-active.kol-select-dropdown-placement-topLeft':
      {
        animationName: 'rcSelectDropdownSlideDownIn',
        animationPlayState: 'running',
      },
    '.kol-select-dropdown-slide-up-leave.kol-select-dropdown-slide-up-leave-active.kol-select-dropdown-placement-topLeft':
      {
        animationName: 'rcSelectDropdownSlideDownOut',
        animationPlayState: 'running',
      },
    '@keyframes rcSelectDropdownSlideUpIn': {
      '0%': {
        opacity: 0,
        transformOrigin: '0% 0%',
        transform: 'scaleY(0)',
      },
      '100%': {
        opacity: 1,
        transformOrigin: '0% 0%',
        transform: 'scaleY(1)',
      },
    },
    '@keyframes rcSelectDropdownSlideUpOut': {
      '0%': {
        opacity: 1,
        transformOrigin: '0% 0%',
        transform: 'scaleY(1)',
      },
      '100%': {
        opacity: 0,
        transformOrigin: '0% 0%',
        transform: 'scaleY(0)',
      },
    },
    '@keyframes rcSelectLoadingIcon': {
      '0%': {
        transform: 'rotate(0)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    '.kol-toast': {
      minWidth: '320px',
      textAlign: 'left',
      boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      '& > div:first-of-type': {
        display: 'none',
        '& + div': {
          fontSize: '14px',
          justifyContent: 'flex-start',
          color: 'white',
          padding: '0',
        },
      },
    },

    '.kol-texteditor': {
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'border',
      '.cke_toolgroup a.cke_button:last-child:after, .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after, .cke_toolbar_separator':
        {
          display: 'none',
        },
      '.cke_inner': {
        borderTopLeftRadius: 'md',
        borderTopRightRadius: 'md',
      },
    },
    '.cke_editable': {
      fontSize: '20px',
    },
    '.kol-texteditor .cke_chrome': { border: '0' },
    '.kol-texteditor .cke_bottom': { display: 'none' },
    '.kol-texteditor .cke_contents': {
      margin: '0 8px',
    },
    '.kol-texteditor .cke_top': {
      background: '#fff',
      borderBottomColor: 'border',
      borderTopLeftRadius: 'md',
      borderTopRightRadius: 'md',
    },
    '.kol-texteditor .cke_toolgroup > * + *': { marginLeft: '8px' },
    '.kol-texteditor .cke_toolbox > * + *': { marginLeft: '16px' },
    '.kol-texteditor .cke_toolgroup a.cke_button:last-child:after, .kol-texteditor .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after, .kol-texteditor .cke_toolgroup a.cke_button:hover:last-child:after, .kol-texteditor .cke_toolgroup a.cke_button:focus:last-child:after, .kol-texteditor .cke_toolgroup a.cke_button.cke_button_on:last-child:after':
      {
        right: '-8px',
      },
    '.kol-texteditor a.cke_button_off:hover': { cursor: 'pointer' },
    '.kol-texteditor a.cke_button_on, .kol-texteditor a.cke_button_off:hover, .kol-texteditor a.cke_button_off:focus, .kol-texteditor a.cke_button_off:active':
      {
        background: '#f5f7fa',
        padding: '4px 6px',
        border: '0',
        borderRadius: '5px',
      },
    '.kol-texteditor .kol-texteditor-footer': {
      padding: '16px',
      textAlign: 'right',
      borderTop: '1px solid font.primary',
    },
    '.kol-texteditor .kol-texteditor-footer p': {
      margin: '0',
      fontSize: '12px',
      color: '#7c8187',
    },
    '.kol-picker': {
      display: 'flex',
      '.kol-picker-input > input:not([value=""])': {
        borderColor: 'border',
      },
      '.kol-picker-input > input:disabled': {
        backgroundColor: 'bg.disabled !important',
      },
    },
    '.kol-picker:has(.kol-picker-input > input:not([value=""])) .kol-picker-range-separator':
      {
        borderColor: 'border',
      },
    '.kol-picker-rtl': {
      direction: 'rtl',
    },
    '.kol-picker-focused': {
      '.kol-picker-input > input': {
        borderColor: 'font.primary',
      },
    },
    '.kol-picker-panel': {
      border: '1px',
      borderColor: 'border',
      background: 'white',
      display: 'inline-block',
      verticalAlign: 'top',
      borderRadius: 'lg',
    },
    '.kol-picker-panel-focused': {
      borderColor: 'font.primary',
    },
    '.kol-picker-panel-rtl': {
      direction: 'rtl',
    },
    '.kol-picker-decade-panel, .kol-picker-year-panel, .kol-picker-month-panel, .kol-picker-week-panel, .kol-picker-date-panel, .kol-picker-time-panel':
      {
        display: 'flex',
        flexDirection: 'column',
      },
    '.kol-picker-decade-panel table, .kol-picker-year-panel table, .kol-picker-month-panel table, .kol-picker-week-panel table, .kol-picker-date-panel table, .kol-picker-time-panel table':
      {
        textAlign: 'center',
        borderCollapse: 'collapse',
      },
    '.kol-picker-header': {
      display: 'flex',
      padding: '8px 16px',
    },
    '.kol-picker-header > *': {
      flex: 'none',
    },
    '.kol-picker-header-view': {
      flex: 'auto',
      textAlign: 'center',
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      fontFamily: 'body',
      fontSize: '14px',
      fontWeight: 600,
    },
    '.kol-picker-year-panel .kol-picker-cell-inner, .kol-picker-month-panel .kol-picker-cell-inner':
      {
        color: 'font.pencil',
      },
    '.kol-picker-header-view > button': {
      border: '0',
      padding: '0',
      fontFamily: 'body',
      fontSize: '14px',
      fontWeight: 600,
    },
    '.kol-picker-cell': {
      color: '#aaa',
    },
    '.kol-picker-cell-disabled': {
      opacity: '0.2',
    },
    '.kol-picker-content thead th': {
      color: 'font.pencil',
      fontWeight: 600,
      fontFamily: 'body',
      fontSize: '14px',
    },
    '.kol-picker-cell-inner': {
      fontSize: '14px',
      width: '100%',
      height: '24px',
      lineHeight: '24px',
      display: 'inline-block',
      boxSizing: 'border-box',
      border: 'none',
      padding: '0',
      margin: '4px 8px',
      background: 'transparent',
      cursor: 'pointer',
      outline: 'none',
      borderRadius: 'sm',
      fontWeight: 600,
      fontFamily: 'body',
      fallbacks: [
        {
          border: '0',
        },
      ],
      transition: 'background 0.3s, border 0.3s',
    },
    '.kol-picker-cell-inner:hover': {
      background: 'font.primary',
      color: 'white',
    },
    '.kol-picker-cell-in-view': {
      color: '#2E434D',
    },
    '.kol-picker-cell-in-range > .kol-picker-cell-inner': {
      background: 'rgba(0,0,255,0.05)',
    },
    '.kol-picker-cell-range-hover-start, .kol-picker-cell-range-hover-end, .kol-picker-cell-range-hover':
      {
        position: 'relative',
      },
    '.kol-picker-cell-range-hover-start::after, .kol-picker-cell-range-hover-end::after, .kol-picker-cell-range-hover::after':
      {
        content: "''",
        position: 'absolute',
        top: '3px',
        bottom: '0',
        left: '0',
        right: '0',
        border: '1px solid font.primary',
        borderLeft: '0',
        borderRight: '0',
        pointerEvents: 'none',
      },
    '.kol-picker-cell-range-hover-start::after': {
      borderLeft: '1px solid font.primary !important',
    },
    '.kol-picker-cell-range-hover-end::after': {
      borderRight: '1px solid font.primary !important',
    },
    '.kol-picker-cell-today > .kol-picker-cell-inner': {
      border: '1px solid',
      borderColor: 'font.primary',
    },
    '.kol-picker-cell-range-start > .kol-picker-cell-inner, .kol-picker-cell-range-end > .kol-picker-cell-inner, .kol-picker-cell-selected > .kol-picker-cell-inner':
      {
        background: 'font.primary',
        color: 'white',
        fontWeight: 'bold',
      },
    '.kol-picker-footer, .kol-picker-picker-footer': {
      background: 'white',
      padding: '8px 16px',
      borderBottomRadius: 'lg',
      borderTop: '1px solid',
      borderTopColor: 'border',
    },
    '.kol-picker-ranges': {
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      listStyle: 'none',
      fontSize: '14px',
      'button, .kol-picker-now-btn': {
        fontWeight: 'bold',
      },
    },
    '.kol-picker-ranges > li': {
      display: 'inline-block',
    },
    '.kol-picker-dropdown-range .kol-picker-panel:first-of-type': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      borderRight: '0',
    },
    '.kol-picker-dropdown-range .kol-picker-panel + .kol-picker-panel': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    '.kol-picker-ok': {
      float: 'right',
    },
    '.kol-picker-body': {
      padding: '8px 12px',
    },
    '.kol-picker-year-panel .kol-picker-cell-inner, .kol-picker-month-panel .kol-picker-cell-inner, .kol-picker-decade-panel .kol-picker-cell-inner':
      {
        width: '80px',
        marginTop: '12px',
        marginBottom: '12px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '25px',
      },
    '.kol-picker-week-panel-row:hover .kol-picker-cell': {
      background: 'font.primary',
    },
    '.kol-picker-week-panel-row-selected .kol-picker-cell': {
      background: 'font.primary',
      color: 'white',
    },
    '.kol-picker-week-panel .kol-picker-cell, .kol-picker-week-panel .kol-picker-cell-inner':
      {
        width: '24px',
      },
    '.kol-picker-week-panel .kol-picker-cell-week': {
      fontSize: '12px',
      color: '#999',
      fontWeight: 'bold',
    },
    '.kol-picker-week-panel .kol-picker-cell:hover > .kol-picker-cell-inner, .kol-picker-week-panel .kol-picker-cell-selected > .kol-picker-cell-inner':
      {
        background: 'transparent',
      },
    '.kol-picker-date-panel .kol-picker-cell-inner': {
      width: '24px',
      borderRadius: '50%',
    },
    '.kol-picker-time-panel': {
      width: 'auto',
      overflow: 'hidden',
    },
    '.kol-picker-time-panel .kol-picker-content': {
      display: 'flex',
      maxHeight: '200px',
      padding: '8px',
    },
    '.kol-picker-time-panel-column': {
      flex: 'none',
      textAlign: 'left',
      listStyle: 'none',
      margin: '0',
      overflowY: 'hidden',
      overflowX: 'hidden',
      width: '80px',
      transition: 'background 0.3s',
      fontSize: '12px',
    },
    '.kol-picker-time-panel-column-active': {
      background: 'rgba(0,0,255,0.1)',
    },
    '.kol-picker-time-panel-column:hover': {
      overflowY: 'auto',
    },
    '.kol-picker-time-panel-column > li': {
      padding: '0',
      margin: '4px 0',
      cursor: 'pointer',
    },
    '.kol-picker-time-panel-column > li .kol-picker-time-panel-cell-inner': {
      color: 'font.ink',
      margin: '0',
      height: '24px',
      lineHeight: '24px',
      display: 'block',
      width: '100%',
      textAlign: 'center',
      fontSize: '14px',
      borderRadius: '25px',
      fontWeight: 'semibold',
      '&:hover': {
        background: 'font.primary',
        color: 'white',
      },
    },
    '.kol-picker-panel-rtl .kol-picker-time-panel-column > li .kol-picker-time-panel-cell-inner':
      {
        padding: '0 16px 0 0',
        textAlign: 'right',
      },
    '.kol-picker-datetime-panel': {
      display: 'flex',
    },
    '.kol-picker-datetime-panel .kol-picker-time-panel': {
      borderLeft: '1px solid #999',
    },
    '.kol-picker-datetime-panel .kol-picker-date-panel, .kol-picker-datetime-panel .kol-picker-time-panel':
      {
        transition: 'opacity 0.3s',
      },
    '.kol-picker-datetime-panel-active .kol-picker-date-panel, .kol-picker-datetime-panel-active .kol-picker-time-panel':
      {
        opacity: '0.3',
      },
    '.kol-picker-datetime-panel-active .kol-picker-date-panel-active, .kol-picker-datetime-panel-active .kol-picker-time-panel-active':
      {
        opacity: '1',
      },
    '.kol-picker-input': {
      position: 'relative',
      display: 'inline-flex',
      width: '100%',
    },
    '.kol-picker-rtl .kol-picker-input': {
      textAlign: 'right',
    },
    '.kol-picker.kol-picker-icon-left .kol-picker-input>input': {
      paddingLeft: '48px !important',
      paddingRight: '16px !important',
    },
    '.kol-picker-input > input': {
      width: '100%',
      minWidth: '0px',
      outline: '2px solid transparent',
      outlineOffset: '2px',
      position: 'relative',
      appearance: 'none',
      fontSize: 'sm',
      paddingLeft: '16px',
      paddingRight: '48px',
      height: '48px',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'border',
      background: '#FDFDFD',
    },
    '.kol-picker-search .kol-picker-input > input': {
      height: '40px',
      borderRadius: '25px',
    },
    '.sooltan-time-picker .kol-picker-input>input': {
      paddingRight: '16px',
      paddingLeft: '48px',
    },
    '.kol-picker-input > input::-moz-placeholder': {
      opacity: '1',
    },
    '.kol-picker-input > input::placeholder': {
      color: 'font.placholder',
    },
    '.kol-picker-input > input:placeholder-shown': {
      textOverflow: 'ellipsis',
    },
    '.kol-picker-input-placeholder > input': {
      color: 'font.placholder',
    },
    '.kol-picker-clear': {
      position: 'absolute',
      right: '4px',
      top: '0',
      cursor: 'pointer',
    },
    '.kol-picker-rtl .kol-picker-clear': {
      right: 'auto',
      left: '4px',
    },
    '.kol-picker-clear-btn::after': {
      content: "'×'",
    },
    '.kol-picker-dropdown': {
      position: 'absolute',
      boxShadow: 'md',
      borderRadius: 'lg',
      zIndex: '14001',
    },
    '.kol-picker-dropdown-range': {
      padding: '0',
    },
    '.kol-picker-dropdown-hidden': {
      display: 'none',
    },
    '.kol-picker-dropdown-placement-topLeft .kol-picker-range-arrow, .kol-picker-dropdown-placement-topRight .kol-picker-range-arrow':
      {
        bottom: '6px',
        transform: 'rotate(135deg)',
      },
    '.kol-picker-dropdown-placement-bottomLeft .kol-picker-range-arrow, .kol-picker-dropdown-placement-bottomright .kol-picker-range-arrow':
      {
        top: '6px',
        transform: 'rotate(-45deg)',
      },
    '.kol-picker-dropdown .kol-picker-range-arrow': {
      position: 'absolute',
      width: '10px',
      height: '10px',
      zIndex: '1',
      left: '10px',
      marginLeft: '10px',
      transition: 'all 0.3s',
    },
    '.kol-picker-dropdown-rtl.kol-picker-dropdown .kol-picker-range-arrow': {
      right: '10px',
      left: 'auto',
      marginLeft: '0',
      marginRight: '10px',
    },
    '.kol-picker-dropdown .kol-picker-range-arrow::before, .kol-picker-dropdown .kol-picker-range-arrow::after':
      {
        content: "''",
        position: 'absolute',
        boxSizing: 'border-box',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      },
    '.kol-picker-dropdown-rtl.kol-picker-dropdown .kol-picker-range-arrow::before, .kol-picker-dropdown-rtl.kol-picker-dropdown .kol-picker-range-arrow::after':
      {
        right: '50%',
        left: 'auto',
        transform: 'translate(50%,-50%)',
      },
    '.kol-picker-dropdown .kol-picker-range-arrow::before': {
      width: '10px',
      height: '10px',
      border: '5px solid #DEE3ED',
      borderColor: '#DEE3ED #DEE3ED transparent transparent',
      display: 'none',
    },
    '.kol-picker-dropdown .kol-picker-range-arrow::after': {
      width: '8px',
      height: '8px',
      border: '4px solid #DEE3ED',
      borderColor: 'white white transparent transparent',
      display: 'none',
    },
    '.kol-picker-range': {
      display: 'inline-flex',
      position: 'relative',
    },
    '.kol-picker-range-wrapper': {
      display: 'flex',
    },
    '.kol-picker-cell-in-range>.kol-picker-cell-inner': {
      borderRadius: '0',
      background: 'rgba(209, 39, 20,0.2)',
    },
    '.kol-picker-range-separator': {
      height: '48px',
      lineHeight: '48px',
      borderTop: '1px solid #DEE3ED',
      borderBottom: '1px solid #DEE3ED',
      width: '24px',
      textAlign: 'center',
    },
    '.kol-picker-focused .kol-picker-range-separator': {
      borderTopColor: 'font.primary',
      borderBottomColor: 'font.primary',
    },
    '.kol-picker-range .kol-picker-input:first-of-type > input': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      borderRight: '0',
      paddingRight: '0px !important',
    },
    '.kol-picker-range .kol-picker-range-separator + .kol-picker-input > input':
      {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderLeft: '0',
        paddingLeft: '16px !important',
      },
    '.kol-picker-range .kol-picker-active-bar': {
      background: 'green',
      bottom: '0',
      height: '3px',
      pointerEvents: 'none',
      transition: 'all 0.3s',
      opacity: '0',
      display: 'none',
    },
    '.kol-picker-range.kol-picker-focused .kol-picker-active-bar': {
      opacity: '1',
    },
    '.kol-picker-panel-container': {
      display: 'inline-block',
      verticalAlign: 'top',
      transition: 'margin 0.3s',
    },
    '.min-200': {
      minWidth: '300px',
    },
  }),
};
