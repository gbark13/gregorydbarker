import { useEffect } from 'react';

export function useRouterRewrites(router) {
  useEffect(() => {
    const { asPath, query } = router;

    if (asPath.startsWith('/')) {
      const [subdomain] = asPath.split('.');

      if (subdomain === 'mysubdomain') {
        const path = asPath.replace(/^\/mysubdomain/, '');
        router.push({ query }, path);
      }
    }
  }, [router.asPath]);
}
