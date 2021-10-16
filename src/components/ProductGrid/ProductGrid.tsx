import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';
import data from '../../data/products.json'

export function ProductGrid() {

  const bottomOfList = useRef<HTMLDivElement>(null);

  return (
    
    <div className={styles.cont}>

      {[...Array(10)].map((_, index) => (
        <ProductBox
            key={index}
            img={data.homeProd.img}
            name={data.homeProd.name}
            desc={data.homeProd.desc}
            price={data.homeProd.price}
        />
      ))}

      <div ref={bottomOfList}></div>

    </div>
  );
}


