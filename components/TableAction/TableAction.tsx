import {
  Box,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
} from '@chakra-ui/react';
import { memo } from 'react';
import { IconType } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi';

interface ITableButton extends ButtonProps {
  title?: string;
  icon?: IconType;
  onClick?: () => void;
  isMulti?: boolean;
  isDisable?: boolean;
  href?: string;
  childs?: IChild[];
}

interface IChild extends MenuItemProps {
  title?: string;
  onClick?: () => void;
  isMulti?: boolean;
  isDisable?: boolean;
  href?: string;
  target?: string;
}

interface IProps extends FlexProps {
  buttons: ITableButton[];
}
const TableAction: React.FC<IProps> = ({ buttons, ...props }): JSX.Element => {
  return (
    <Flex align="center" gap="2" justify="center" {...props}>
      {buttons?.map((button: ITableButton, index: number) =>
        button?.isMulti ? (
          <Box key={`button-table-multi-${index}`}>
            <Menu isLazy>
              <MenuButton
                px={4}
                py={2}
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: 'button.secondary.default' }}
                _expanded={{ bg: 'bg.primary', color: 'white' }}
                _focus={{ boxShadow: 'none' }}
              >
                <FiMoreHorizontal />
              </MenuButton>
              <MenuList minW="unset">
                {button?.childs?.map((child: IChild, cIdx: number) => (
                  <MenuItem
                    minW="200px"
                    _hover={{ bg: 'blackAlpha.50' }}
                    key={`child-${index}-${cIdx}`}
                    {...child}
                  >
                    {child.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Button
            key={`button-table-${index}`}
            size="sm"
            {...button}
            rounded="5px"
          >
            {button.title}
          </Button>
        ),
      )}
    </Flex>
  );
};

export default memo(TableAction);
