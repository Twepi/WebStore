import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

export function ProductGrid() {

  const bottomOfList = useRef<HTMLDivElement>(null);
  const tempArr = [...Array(10)];
  const staticInfo = {
    img: '',
    name: 'Tiny Potato Face',
    desc: 'Classic Tee',
    price: '$20',
  }

  return (
    
    <div className={styles.cont}>

      {tempArr.map(ind => (
        <ProductBox
            key={ind}
            img={staticInfo.img}
            name={staticInfo.name}
            desc={staticInfo.desc}
            price={staticInfo.price}
        />
      ))}

      <div ref={bottomOfList}></div>

    </div>
  );
}


