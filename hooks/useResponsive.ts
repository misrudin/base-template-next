import { useMediaQuery } from '@chakra-ui/react';

const useResponsive = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)', {
    ssr: true,
    fallback: false,
  });
  const [isTablet] = useMediaQuery('(max-width: 992px)', {
    ssr: true,
    fallback: false,
  });

  return { isMobile, isTablet };
};

export default useResponsive;
