import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import styles from 'styles/Home.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Infinite Query</title>
      </Head>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </QueryClientProvider>
  );
}
export default MyApp;
