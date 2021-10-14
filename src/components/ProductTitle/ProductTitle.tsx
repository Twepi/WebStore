import React from 'react';
import styles from './producttitle.module.scss';

export function ProductTitle() {
  return (
    <div className={styles.container}>
      <strong>Tiny Potato Face</strong>
      <p>Women's Classic Tee</p>
      <strong>$21.99</strong>
    </div>
  );
}