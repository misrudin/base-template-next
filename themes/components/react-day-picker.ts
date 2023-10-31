const ReactDayPickerStyle = {
  '.DayPicker': { display: 'inline-block', fontSize: '1em' },
  '.DayPicker-wrapper': {
    position: 'relative',
    flexDirection: 'row',
    paddingBottom: '1em',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  '.DayPicker-Months': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '.DayPicker-Month': {
    display: 'table',
    margin: '0 1em',
    marginTop: '1em',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  '.DayPicker-NavBar': {},
  '.DayPicker-NavButton': {
    position: 'absolute',
    top: '1em',
    right: '1.5em',
    left: 'auto',
    display: 'inline-block',
    marginTop: '2px',
    width: '1.25em',
    height: '1.25em',
    backgroundPosition: 'center',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    color: '#8B9898',
    cursor: 'pointer',
  },
  '.DayPicker-NavButton:hover': { opacity: 0.8 },
  '.DayPicker-NavButton--prev': {
    marginRight: '1.5em',
    backgroundImage:
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC')",
  },
  '.DayPicker-NavButton--next': {
    backgroundImage:
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==')",
  },
  '.DayPicker-NavButton--interactionDisabled': { display: 'none' },
  '.DayPicker-Caption': {
    display: 'table-caption',
    marginBottom: '0.5em',
    padding: '0 0.5em',
    textAlign: 'left',
  },
  '.DayPicker-Caption > div': { fontWeight: 500, fontSize: '1.15em' },
  '.DayPicker-Weekdays': { display: 'table-header-group', marginTop: '1em' },
  '.DayPicker-WeekdaysRow': { display: 'table-row' },
  '.DayPicker-Weekday': {
    display: 'table-cell',
    padding: '0.5em',
    color: '#8B9898',
    textAlign: 'center',
    fontSize: '0.875em',
  },
  '.DayPicker-Weekday abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'none',
  },
  '.DayPicker-Body': { display: 'table-row-group' },
  '.DayPicker-Week': { display: 'table-row' },
  '.DayPicker-Day': {
    display: 'table-cell',
    padding: '0.5em',
    borderRadius: '50%',
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'pointer',
  },
  '.DayPicker-WeekNumber': {
    display: 'table-cell',
    padding: '0.5em',
    minWidth: '1em',
    borderRight: '1px solid #EAECEC',
    color: '#8B9898',
    verticalAlign: 'middle',
    textAlign: 'right',
    fontSize: '0.75em',
    cursor: 'pointer',
  },
  '.DayPicker--interactionDisabled .DayPicker-Day': { cursor: 'default' },
  '.DayPicker-Footer': { paddingTop: '0.5em' },
  '.DayPicker-TodayButton': {
    border: 'none',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    color: '#4A90E2',
    fontSize: '0.875em',
    cursor: 'pointer',
  },
  '.DayPicker-Day--today': { color: '#D0021B', fontWeight: 700 },
  '.DayPicker-Day--outside': { color: '#8B9898', cursor: 'default' },
  '.DayPicker-Day--disabled': { color: '#DCE0E0', cursor: 'default' },
  '.DayPicker-Day--sunday': { backgroundColor: '#F7F8F8' },
  '.DayPicker-Day--sunday:not(.DayPicker-Day--today)': { color: '#DCE0E0' },
  '.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside)':
    {
      position: 'relative',
      backgroundColor: '#D12714',
      color: '#F0F8FF',
    },
  '.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover':
    {
      backgroundColor: '#D12714',
    },
  '.DayPicker:not(.DayPicker--interactionDisabled)\n  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover':
    {
      backgroundColor: '#F0F8FF',
    },
  '.DayPickerInput': { display: 'inline-block' },
  '.DayPickerInput-OverlayWrapper': { position: 'relative' },
  '.DayPickerInput-Overlay': {
    position: 'absolute',
    left: '0',
    zIndex: 1,
    background: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  },
};

export default ReactDayPickerStyle;