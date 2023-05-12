import { useEffect } from 'react';

export function useRouterRewrites(router) {
  useEffect(() => {
    const { asPath, query } = router;

    if (asPath.startsWith('/')) {
      const [subdomain] = asPath.split('.');

      if (subdomain === 'bella') {
        const path = asPath.replace(/^\/bella/, '');
        router.push({ query }, path);
      }
    }
  }, [router.asPath]);
}
