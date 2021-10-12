import React from 'react';
import styles from './menuitems.module.scss';

export function MenuItems() {


  return (
    <div className={styles.menu}> 
      <ul className={styles.container}>
        <li className={styles._}>
          <a href="">Apparel</a>
        </li>
        <li className={styles._}>
          <a href="">Homeware</a>
        </li>
        <li className={styles._}>
          <a href="">Accessories</a>
        </li>
      </ul>
    </div>
  );
}