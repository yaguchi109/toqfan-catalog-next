import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePageView, GoogleAnalytics } from 'src/commons/lib/gtag';
import '../styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
export default App;
