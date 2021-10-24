import React from 'react';
import HomeLayout from '@/layouts/Home';

function Movie() {
  return (
    <div
      style={{
        backgroundColor: '#0b0b0b',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <HomeLayout />
    </div>
  );
}

export default Movie;
