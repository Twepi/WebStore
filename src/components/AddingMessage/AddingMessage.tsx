import React from 'react';
import ReactDOM from 'react-dom';
import styles from './addingmessage.module.scss'


export function AddingMessage() {
  const node = document.querySelector('#message-root') as HTMLElement;
  if (!node) return null;

  node.style.position = 'fixed';
  node.style.top = '10px';
  node.style.zIndex = '3';
  node.style.left = '15%';

  return ReactDOM.createPortal((
    <div className={styles.container}>
      <div className={styles.animationContainer}>
        <div>You item was added to cart</div>
        <div>You item was added to cart</div>
        <div>You item was added to cart</div>
        <div>You item was added to cart</div>
        <div className={styles.invisDiv}>You item was added to cart</div>
      </div>
    </div>
  ), node);
}