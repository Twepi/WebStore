import React from 'react';
import { Link } from 'react-router-dom';
import { FlyoutMenu } from '../FlyoutMenu';
import { MenuActions } from '../MenuActions';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './mainpanel.module.scss';

export function MainPanel() {

  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <Link to='/'>
          <img className={styles.logo} src="https://www.mylogohouse.com/category/fashion/img-lotus-flower-logo-design-01/lotus-flower-logo-design-800x500-color.jpg" alt="Logo" />
        </Link>

      <div className={styles.menucontainer}>
        <MenuItem name='Apparel'>
          <FlyoutMenu items={["unisex / men's t-shirts", "women's t-shirts", "hoodies & sweatshirts"]}/>
        </MenuItem>

        <MenuItem name='Homeware'>
          <FlyoutMenu items={["pillows", "bath", "bedding"]}/>
        </MenuItem>

        <MenuItem name='Accessories'>
          <FlyoutMenu items={["face masks", "phone cases", "socks"]}/>
        </MenuItem>
      </div>

        <MenuActions />
      </div>
    </div>
  );
}