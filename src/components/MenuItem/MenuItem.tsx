import React, { useState } from 'react';
import styles from './menuitem.module.scss';

interface IProps {
  name: string;
  children?: React.ReactNode;
}

export function MenuItem({name, children}: IProps) {
  const [isHoverMain, setIsHoverMain] = useState(false);
  const [isHoverBridge, setIsHoverBridge] = useState(false);
  const [isHoverChild, setIsHoverChild] = useState(false);

  function handleIsHoverMainOver() {
    setIsHoverMain(true);
    setIsHoverBridge(true);
    setIsHoverChild(true);
  }

  function handleIsHoverBridgeOver() {
    setIsHoverBridge(true);
    setIsHoverChild(true);
  }



  return (
    <div
      onMouseOver={handleIsHoverMainOver}
      onMouseOut={() => setIsHoverMain(false)}
      className={styles.container}>
      
      <div className={styles.item}>
        <a className={styles.text} href="">
          {name}
        </a>
      </div>
      
      {(isHoverMain || isHoverBridge) && (
        <div
          onMouseOver={handleIsHoverBridgeOver}
          onMouseOut={() => setIsHoverBridge(false)} 
          className={styles.bridge}></div>
      )}

      {children && (isHoverMain || isHoverBridge || isHoverChild) && (
        <div
          onMouseOver={() => setIsHoverChild(true)}
          onMouseOut={() => setIsHoverChild(false)} 
        >
          {children}
        </div>
      )}
    </div>
  );
}