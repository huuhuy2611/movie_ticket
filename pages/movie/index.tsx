import React from 'react';
import HomeLayout from '@/layouts/Home';
import { useTranslation } from 'react-i18next';
function Movie() {
  const {t} = useTranslation();
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
      {t("Adventure")}
    </div>
  );
}

export default Movie;
