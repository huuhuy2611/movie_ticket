import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Image src="/images/teatro_logo.png" width={88} height={24} alt="Logo" />
    </div>
  );
}

export default Header;
