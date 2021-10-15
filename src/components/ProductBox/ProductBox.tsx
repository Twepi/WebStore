import React from 'react';
import { ProductImage } from '../ProductImage/ProductImage';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import styles from './productbox.module.scss';

interface IProps{
  img: string;
  name: string;
  desc: string;
  price: string;

}

export function ProductBox({ img, name, desc, price }: IProps) {
  return(
    <div className={styles.container}>
      <ProductImage img={img}/>
      <ProductTitle name={name} desc={desc} price={price}/>
    </div>
  );
}