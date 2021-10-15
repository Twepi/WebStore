import React, { useEffect } from 'react';
import styles from './flyoutmenu.module.scss';

interface IProps {
  items: string[];
}

export function FlyoutMenu({items}: IProps) {
  
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        {items.map((name, index) => (
          <li key={index}>
            <a href="">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}