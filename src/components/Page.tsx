import React, { useLayoutEffect, useRef, useState } from 'react';

import { useViewportScroll } from 'framer-motion';
import { Box } from 'theme-ui';

const Page = (children: any) => {
  const [elementTop, setElemementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  // const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], { clamp: false });

  useLayoutEffect(() => {
    console.log(scrollY, elementTop);
    const el = ref.current;
    setElemementTop(el.offsetTop);
  }, [ref]);

  return (
    <Box ref={ref}>
      {children}
    </Box>
  );
};

export default Page;
