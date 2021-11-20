import React from 'react'
import styles from './loaderanim.module.scss'

export function LoaderAnim() {
  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>    
    </div>
  );
}