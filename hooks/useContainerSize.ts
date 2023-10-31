import { useEffect, useState } from 'react';

type ContainerSize = {
  width: number;
  height: number;
};

export const useContainerSize = (id: string): ContainerSize | undefined => {
  const [containerSize, setContainerSize] = useState<ContainerSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize(): void {
      const container = document.getElementById(id);
      setContainerSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return containerSize;
};
