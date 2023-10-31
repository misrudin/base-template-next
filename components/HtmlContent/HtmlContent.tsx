import styled from '@emotion/styled';

import colors from '@themes/foundations/colors';

const HtmlContent = styled.div({
  marginTop: 24,
  p: {
    marginBottom: 24,
    fontSize: 14,
    textAlign: 'justify',
  },
  'h1, h2, h3': {
    display: 'block',
    fontWeight: 'bold',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    textAlign: 'justify',
  },
  h1: {
    fontSize: '2em',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
  },
  h2: {
    fontSize: '1.5em',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
  },
  h3: {
    fontSize: '1.17em;',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
  },
  h4: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  pre: {
    display: 'block',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    margin: '1em 0px',
  },
  a: {
    color: colors.red[500],
  },
  '& ol, & ul': {
    paddingLeft: 16,
    marginBottom: 24,
    li: {
      fontSize: 14,
    },
  },
});

export default HtmlContent;
