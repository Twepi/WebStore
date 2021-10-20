import React from 'react';
import styles from './sizebox.module.scss';

interface IProps {
  children: string;
  handleClick: (string: string, e: React.MouseEvent<HTMLDivElement>) => void;
}

export function SizeBox({children, handleClick}: IProps) {

  return (
    <div onClick={(e) => handleClick(children.replaceAll(' ', ''), e)} className={styles.sizeContainer}>
      <label htmlFor={children.replaceAll(' ', '')} className={styles.sizeLabel}>
        <input className={styles.sizeInput} type="radio" id={children.replaceAll(' ', '')} name='size'/>
        <div className={styles.sizeBox}>{children.toLocaleUpperCase()}</div>
      </label>
    </div>
  );
}