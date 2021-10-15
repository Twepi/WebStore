import React from 'react';
import styles from './productimage.module.scss';

interface IProps{
  img: string;
}

export function ProductImage({ img }: IProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image} 
        src={img} 
        alt="123" 
        />
    </div>
  );
}