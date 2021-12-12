import React from 'react';
import CheckoutLayout from '@/layouts/Checkout';

function Checkout() {
  return (
    <>
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
