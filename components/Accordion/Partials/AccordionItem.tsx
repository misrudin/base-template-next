import { Box, Collapse, Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { accordionStyled } from '../Accordion.styles';

interface IProps {
  readonly title?: string;
  readonly description?: string;
  readonly isOpen?: boolean;
  readonly onToggle: () => void;
}
const AccordionItem: React.FC<IProps> = ({
  title,
  description,
  isOpen,
  onToggle,
}): JSX.Element => {
  return (
    <Box {...accordionStyled({ isExpand: false })}>
      <Flex
        onClick={onToggle}
        cursor="pointer"
        py="5"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading
          as="h6"
          size="xs"
          color={isOpen ? 'font.primary' : ''}
          fontWeight="bold"
        >
          {title}
        </Heading>
        <Text fontSize="md">{isOpen ? '-' : '+'}</Text>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pb="4">
          <Text fontSize="sm" whiteSpace="pre-line">
            {description}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

export default memo(AccordionItem);
