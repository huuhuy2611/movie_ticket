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
      <div
        style={{
          backgroundImage: `url(${'/images/movie-details-bg.jpg'})`,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: -1,
        }}
      />
      <HomeLayout />
    </div>
  );
}

export default Movie;
