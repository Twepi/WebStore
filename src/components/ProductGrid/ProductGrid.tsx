import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

interface IProps {
  data: {
    img: string;
    name: string;
    desc: string;
    price: string;
  }
}

export function ProductGrid({data}: IProps) {

  const bottomOfList = useRef<HTMLDivElement>(null);

  return (
    
    <div className={styles.cont}>

      {[...Array(10)].map((_, index) => (
        <ProductBox
            key={index}
            img={data.img}
            name={data.name}
            desc={data.desc}
            price={data.price}
        />
      ))}

      <div ref={bottomOfList}></div>

    </div>
  );
}


