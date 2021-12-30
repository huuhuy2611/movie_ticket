/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import '../i18n';

const blacklist = ['/auth'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RecoilRoot>
      {!blacklist.find((item: string) => item === router.pathname) && (
        <Header />
      )}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
