import React from 'react';
import styles from './sizebox.module.scss';

interface IProps {
  children: string;
}

export function SizeBox({children}: IProps) {

  return (
    <div className={styles.sizeContainer}>
      <label htmlFor={children.replaceAll(' ', '')} className={styles.sizeLabel}>
        <input className={styles.sizeInput} type="radio" id={children.replaceAll(' ', '')} name='size'/>
        <div className={styles.sizeBox}>{children.toLocaleUpperCase()}</div>
      </label>
    </div>
  );
}