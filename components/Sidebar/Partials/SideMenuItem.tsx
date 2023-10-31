import { Box, Heading } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import { FC, ReactElement, memo } from 'react';
import { ISideMenuItem } from './SideMenu/SideMenu.types';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';

const SideMenuItem: FC<ISideMenuItem> = ({
  isSelected,
  icon,
  link,
  title,
  isSubMenu,
}): ReactElement => {
  const baseMenuProps = {
    as: Link,
    href: link,
    scroll: false,
    d: 'flex',
    py: '0',
    ps: '6',
    mr: '6',
    alignItems: 'center',
    fontSize: 'lg',
    color: isSelected ? 'white' : 'font.pencil',
    bg: isSelected ? 'bg.primary' : 'white',
    roundedRight: '55px',
    cursor: 'pointer',
    h: '45px',
    lineHeight: '45px',
    sx: {
      ':hover': {
        'div, p': {
          color: isSelected ? 'white' : 'font.primary',
        },
      },
    },
  };

  return (
    <Box
      pos="relative"
      {...(!isSubMenu && { mb: '2' })}
      {...(isSelected && { id: 'menu-selected' })}
    >
      <Tooltip hasArrow label={title} placement="right">
        <Box {...baseMenuProps} className="shrinked-menu">
          <Box fontSize="18px">{icon}</Box>
        </Box>
      </Tooltip>
      <Box {...baseMenuProps} className="expanded-menu">
        <Box fontSize="18px">{icon ? icon : <BsDot />}</Box>
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
        >
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default memo(SideMenuItem);
