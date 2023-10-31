import { Box, Image } from '@chakra-ui/react';
import { memo, useEffect, useMemo } from 'react';
import { sidebarStyle } from './Sidebar.styles';
import SideMenuDivider from '@components/Sidebar/Partials/SideMenuDivider';
import SideMenuItem from './Partials/SideMenuItem';
import SideMenuParent from './Partials/SideMenuParent';
import SideMenu from './Partials/SideMenu';
import SideMenuSub from './Partials/SideMenuSub';
import { useRouter } from 'next/router';
import { windowLocalStorage } from '@helpers/window';
import { listMenuAdmin } from './Sidebar.model';
import { IMenu } from '@interfaces/IMenu';

interface IProps {
  menuSelected?: string;
}
const Sidebar: React.FC<IProps> = ({ menuSelected }): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const sideMenu = document.getElementById('side-menu');
    const activeMenu = document.getElementById('menu-selected');
    if (activeMenu && sideMenu) {
      sideMenu.scrollTo(0, activeMenu.offsetTop - activeMenu.clientHeight * 2);
    }
  }, [router]);

  const menus = useMemo(() => {
    const localMenu = windowLocalStorage('get', 'menu-admin');
    if (!!localMenu) {
      // const jsonMenu = JSON.parse(String(localMenu || ''));
      return listMenuAdmin;
    }
    return listMenuAdmin;
  }, []);

  return (
    <Box {...sidebarStyle}>
      <Box
        h="60px"
        borderBottom="1px"
        borderColor="border"
        display="flex"
        alignItems="center"
        px="4"
      >
        <Image src="/logo.png" w="100px" />
      </Box>
      <SideMenu expanded={true}>
        {menus?.map((menuParent: IMenu, indexParent: number) => {
          if (menuParent?.isParent) {
            return (
              <SideMenuParent
                title={menuParent?.name}
                key={`menu-parent-${indexParent}`}
              >
                {menuParent?.child?.map(
                  (menuSubParent: IMenu, indexSubParent: number) => {
                    if (menuSubParent?.isMulti) {
                      return (
                        <SideMenuSub
                          key={`menu-sub-parent-multi-${indexParent}-${indexSubParent}`}
                          icon={menuSubParent?.icon}
                          title={menuSubParent?.name}
                          isSelected={menuSubParent?.code
                            .split(',')
                            .includes(menuSelected)}
                        >
                          {menuSubParent?.child?.map(
                            (menuChild: IMenu, indexChild: number) => (
                              <SideMenuItem
                                key={`menu-child-${indexParent}-${indexSubParent}-${indexChild}`}
                                link={menuChild?.route}
                                title={menuChild?.name}
                                isSelected={menuSelected === menuChild?.code}
                                isSubMenu
                              />
                            ),
                          )}
                        </SideMenuSub>
                      );
                    }
                    return (
                      <SideMenuItem
                        key={`menu-sub-parent-${indexParent}-${indexSubParent}`}
                        icon={menuSubParent?.icon}
                        link={menuSubParent?.route || '/'}
                        title={menuSubParent?.name}
                        isSelected={menuSelected === menuSubParent?.code}
                      />
                    );
                  },
                )}
              </SideMenuParent>
            );
          }
          if (menuParent?.isDivider) {
            return <SideMenuDivider key={`menu-divider-${indexParent}`} />;
          }
        })}
      </SideMenu>
    </Box>
  );
};

export default memo(Sidebar);
