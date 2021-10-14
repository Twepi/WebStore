import React from 'react';
import styles from './productimage.module.scss';

export function ProductImage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image} 
        src="https://vangogh.teespring.com/v3/image/pM0lbpbIZKYPi09CRmSJokOUE-A/560/560.jpg" 
        alt="" 
        />
    </div>
  );
}