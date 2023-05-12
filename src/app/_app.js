// src/app/_app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const { asPath, query } = router;

    if (asPath.startsWith('/')) {
      const hostnameParts = window.location.hostname.split('.');
      const tld = hostnameParts.pop();
      const domain = hostnameParts.pop();
      const subdomain = hostnameParts.join('.');

      if (subdomain === 'bella.daughter.of') {
        // const path = asPath.replace('/', '');
        router.push({ query }, `https://${domain}.${tld}/bella`);
      }
    }
  }, [router.asPath]);

  return <Component {...pageProps} />;
}

export default MyApp;
