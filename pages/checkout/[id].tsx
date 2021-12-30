import React from 'react';
import CheckoutLayout from '@/layouts/Checkout';
import Head from 'next/head';

function Checkout() {
  return (
    <>
      <Head>
        <title>Check out page</title>
        <meta
          name="description"
          content="Description - check out page"
          key="home-des"
        />
        <meta
          property="og:title"
          content="Title - check out page"
          key="home-og-title"
        />
        <meta
          property="og:description"
          content="Description OG - check out page"
          key="home-og-des"
        />
        <meta
          property="og:image"
          content="https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/"
          key="home-og-img"
        />
        <meta
          property="og:image:width"
          content="1200"
          key="home-og-img-width"
        />
        <meta
          property="og:image:height"
          content="630"
          key="home-og-img-height"
        />
        <meta
          property="og:url"
          content='http://localhost:3000/checkout/041ee19b-0a50-30ae-accf-2e8d4031422f'
          key="home-og-url"
        />
      </Head>
      <div
        style={{
          backgroundImage: `url(${'/images/movie-details-bg.jpg'})`,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 0,
        }}
      />
      <CheckoutLayout />
    </>
  );
}

export default Checkout;
