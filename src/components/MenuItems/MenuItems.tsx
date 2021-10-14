import React from 'react';
import styles from './menuitems.module.scss';

export function MenuItems() {


  return (
    <div className={styles.menu}> 
      <ul className={styles.container}>
        <li className={styles.listitem}>
          <a className={styles.text} href="">Apparel</a>
        </li>
        <li className={styles.listitem}>
          <a className={styles.text} href="">Homeware</a>
        </li>
        <li className={styles.listitem}>
          <a className={styles.text} href="">Accessories</a>
        </li>
      </ul>
    </div>
  );
}