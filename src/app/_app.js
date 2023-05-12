import { useRouter } from 'next/router';
import { useRouterRewrites } from '../utils/rewrites';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useRouterRewrites(router);

  return <Component {...pageProps} />;
}

export default MyApp;
