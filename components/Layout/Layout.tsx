import { Box, Container } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { layoutStyled } from '@components/Layout/Layout.styles';
import { ILayout } from '@components/Layout/Layout.types';
import Navbar from '@components/Navbar';
import RenderIf from '@components/RenderIf';
import SEO from '@components/SeoComponent/Seo';
import Sidebar from '@components/Sidebar';

const Layout: FC<ILayout> = ({
  children,
  title,
  description,
  imageUrl,
  urlCanonical,
  menuSelected,
  isNavbar = true,
  isSidebar = true,
  isNoShadow,
}): JSX.Element => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        imageUrl={imageUrl}
        urlCanonical={urlCanonical}
        type="website"
      />
      <Box bg="#FAFBFE" minH="100vh" display="flex" w="100vw">
        <RenderIf isTrue={isSidebar}>
          <Sidebar menuSelected={menuSelected} />
        </RenderIf>
        <Box {...layoutStyled()} bg="#FAFBFE">
          <RenderIf isTrue={isNavbar}>
            <Navbar isNoShadow={isNoShadow} />
          </RenderIf>
          <Container as="main" id="container" maxW="unset" px="0">
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default memo(Layout);
