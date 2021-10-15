import React from 'react';
import styles from './producttitle.module.scss';

interface IProps{
  name: string;
  desc: string;
  price: string;
}

export function ProductTitle({ name, desc, price }: IProps) {
  return (
    <div className={styles.container}>
      <strong>{name}</strong>
      <p>{desc}</p>
      <strong>{price}</strong>
    </div>
  );
}