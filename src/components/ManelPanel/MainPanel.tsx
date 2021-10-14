import React from 'react';
import { FlyoutMenu } from '../FlyoutMenu';
import { MenuActions } from '../MenuActions';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './mainpanel.module.scss';

export function MainPanel() {
  const test = ['test', 'milkshake', 'putlo']

  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src="https://www.mylogohouse.com/category/fashion/img-lotus-flower-logo-design-01/lotus-flower-logo-design-800x500-color.jpg" alt="Logo" />
        </div>

      <div className={styles.menucontainer}>
        <MenuItem name='Apparel'>
          <FlyoutMenu items={test}/>
        </MenuItem>
        <MenuItem name='Homeware' />
        <MenuItem name='Accessories' />
      </div>

        <MenuActions />
      </div>
    </div>
  );
}