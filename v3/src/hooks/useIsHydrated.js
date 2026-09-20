import { useState, useEffect } from 'react';

/**
 * False during server rendering and on the first client render, true after
 * hydration. Used to keep the email address out of the server-rendered HTML so
 * address-harvesting bots — which read the raw response and do not run JS —
 * never see it in plain text.
 */
const useIsHydrated = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => setIsHydrated(true), []);

  return isHydrated;
};

export default useIsHydrated;
