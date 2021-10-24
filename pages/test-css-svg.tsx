import React from 'react';
import Image from 'next/image';
// import { IconVercel } from '@/images';
import styles from '../styles/Home.module.scss';

function Test() {
  return (
    <div className={styles.container}>
      abcd
      <br />
      <Image
        src="/images/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
      <br />
      {/* <IconVercel /> */}
    </div>
  );
}

export default Test;
