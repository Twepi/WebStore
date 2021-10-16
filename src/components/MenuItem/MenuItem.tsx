import React, { useEffect, useRef, useState } from 'react';
import styles from './menuitem.module.scss';
import { Link } from 'react-router-dom';

interface IProps {
  name: string;
  children?: React.ReactNode;
}

export function MenuItem({name, children}: IProps) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const linkName = name.toLocaleLowerCase();

  function handleHover(event: MouseEvent) {
    if (event.target instanceof Node && ref.current?.contains(event.target)) {
      setIsHover(true);
    } else {
      setIsHover(false);
      document.removeEventListener('mouseover', handleHover);
    }
  }

  return (
      <div
        ref={ref}
        onMouseOver={() => document.addEventListener('mouseover', handleHover)}
        className={styles.container}>
        <Link to={linkName}>
          <div className={styles.item}>
            <div className={styles.text}>
              {name}
            </div>
          </div>
        </Link>
        
        {isHover && (
          <div className={styles.bridge}></div>
        )}

        {children && isHover && (
          children
        )}
      </div>

  );
}