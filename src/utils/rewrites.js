import { useEffect } from 'react';

export function useRouterRewrites(router) {
  useEffect(() => {
    const { asPath, query } = router;

    if (asPath.startsWith('/')) {
      const [subdomain] = asPath.split('.');
      console.log("here is the rewrite", {subdomain: subdomain, asPath: asPath})
      if (subdomain === 'bella') {
        const path = asPath.replace(/^\/bella/, '');
        router.push({ query }, path);
      }
    }
  }, [router.asPath]);
}
