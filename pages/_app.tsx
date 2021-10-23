/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/antd.less';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import React from 'react';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
export default MyApp;
