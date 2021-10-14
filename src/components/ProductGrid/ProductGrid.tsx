import React from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

export function ProductGrid() {
  let testGen = [...Array(10).keys()];

  return (
    <div className={styles.cont}>
      {testGen.map((item, ind) => (
        <ProductBox key={ind} />
      ))}
    </div>
  );
}