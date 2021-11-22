import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={'/' + name.replaceAll(/\s[&\/]/g, '')
                                .replaceAll(/\s{2,}/g, '')
                                .replaceAll(/[\s']/g, '-')}
            >
              {name}</Link>
              <div className={styles.decorLine}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}