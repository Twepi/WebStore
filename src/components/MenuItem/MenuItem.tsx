import React, { useEffect, useRef, useState } from 'react';
import styles from './menuitem.module.scss';

interface IProps {
  name: string;
  children?: React.ReactNode;
}

export function MenuItem({name, children}: IProps) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleHover(event: MouseEvent) {
      if (event.target instanceof Node && ref.current?.contains(event.target)) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    }

    document.addEventListener('mouseover', handleHover)

    return () => {
      document.removeEventListener('mouseover', handleHover);
    }
  }, []);


  return (
    <div
      ref={ref}
      className={styles.container}>
        
      <div className={styles.item}>
        <a className={styles.text} href="">
          {name}
        </a>
      </div>
      
      {isHover && (
        <div className={styles.bridge}></div>
      )}

      {children && isHover && (
        children
      )}
    </div>
  );
}