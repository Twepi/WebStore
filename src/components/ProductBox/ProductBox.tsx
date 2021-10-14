import React from 'react';
import { ProductImage } from '../ProductImage/ProductImage';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import styles from './productbox.module.scss';

export function ProductBox() {
  return(
    <div className={styles.container}>
      <ProductImage />
      <ProductTitle />
    </div>
  );
}