import {
  ThemeConfig,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';

import { Breadcrumb } from './components/breadcrumb';
import { Button } from './components/button';
import { Form } from './components/form';
import { FormLabel } from './components/formLabel';
import { Heading } from './components/heading';
import { Input } from './components/input';
import { Link } from './components/link';
import { Menu } from './components/menu';
import { Modal } from './components/modal';
import { PinInput } from './components/pinInput';
import { Radio } from './components/radio';
import { Tabs } from './components/tabs';
import { Textarea } from './components/textarea';
import { Text } from './components/text';
import { Table } from './components/table';
import foundations from './foundations';
import { styles } from './styles';
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const MyCustomTheme = extendTheme(
  {
    config,
    ...foundations,
    fonts: {
      heading: `var(--font-heading) !important`,
      body: `var(--font-body) !important`,
    },
    styles,
    components: {
      Breadcrumb,
      Button,
      Form,
      FormLabel,
      Heading,
      Input,
      Link,
      Menu,
      Modal,
      Select: Input,
      PinInput,
      Radio,
      Tabs,
      Textarea,
      Text,
      Table,
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' }),
);
