import { Box, Heading, VStack } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import { FC, ReactElement, memo } from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { ISideMenuSub } from './SideMenu/SideMenu.types';

const SideMenuSub: FC<ISideMenuSub> = ({
  isSelected,
  icon,
  title,
  link,
  children,
}): ReactElement => {
  const baseMenuProps = {
    d: 'flex',
    py: '0',
    ps: '6',
    mr: '6',
    alignItems: 'center',
    fontSize: 'lg',
    color: 'font.ink',
    cursor: 'pointer',
    h: '42px',
    lineHeight: '42px',
    sx: {
      ':hover': {
        'div, p': {
          color: 'font.primary',
        },
      },
    },
  };

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isSelected });

  return (
    <Box pos="relative" mb="2" className="sidemenu-sub">
      <Tooltip hasArrow label={title} placement="right">
        <Box
          {...baseMenuProps}
          className={`shrinked-menu ${isSelected ? 'active' : ''}`}
          onClick={link}
        >
          <Box fontSize="18px" color="font.pencil">
            {icon}
          </Box>
        </Box>
      </Tooltip>
      <Box {...baseMenuProps} className="expanded-menu" onClick={onToggle}>
        <Box fontSize="18px" color="font.pencil">
          {icon}
        </Box>
        <Heading
          ml="4"
          flex="1"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          as="div"
          fontWeight="medium"
          fontSize="sm"
          fontFamily="body"
          color="font.pencil"
        >
          {title}
        </Heading>
        <Box
          transition=".5s"
          {...(isOpen && {
            transform: 'rotate(-180deg)',
          })}
          color="font.pencil"
        >
          <FiChevronDown size="18px" />
        </Box>
      </Box>
      <VStack
        spacing="0"
        alignItems="stretch"
        overflow="hidden"
        maxHeight="0"
        transition="all .5s"
        {...(isOpen && {
          maxHeight: '1000px',
        })}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default memo(SideMenuSub);
