import React, { useEffect } from 'react';

export default function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
