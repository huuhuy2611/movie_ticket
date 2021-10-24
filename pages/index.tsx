import React, { useEffect } from 'react';
import router from 'next/router';

function Home() {
  useEffect(() => {
    router.push('/movie');
  }, []);

  return <></>;
}

export default Home;
