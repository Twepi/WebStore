import React from 'react';
import { MenuActions } from '../MenuActions/MenuActions';
import { MenuItems } from '../MenuItems';
import styles from './mainpanel.module.scss';

export function MainPanel() {


  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src="https://www.mylogohouse.com/category/fashion/img-lotus-flower-logo-design-01/lotus-flower-logo-design-800x500-color.jpg" alt="Logo" />
        </div>

        <MenuItems />
        <MenuActions />
      </div>
    </div>
  );
}