import React, { useRef, useState } from "react";
import styles from './accordionbutton.module.scss'

interface IProps {
  children: string;
}

export function AccrodionButton({ children }: IProps) {
  const [clicked, setClicked] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if(ref.current) {
      setClicked(!clicked);
      if (clicked===true) {
        ref.current.style.opacity = '1';
        ref.current.style.height = '4.2rem';
      } else {
        ref.current.style.opacity ='0';
        ref.current.style.height = '0';
      }
    }
  }

  return (
    <button onClick={handleClick} className={styles.container} type='button'>
      <span className={styles.title}>
        {children}
        <span>
          <svg className={styles.plus} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            {clicked && (
              <line x1="12" y1="5" x2="12" y2="19"></line>
            )}
          </svg>
        </span>
      </span>
      <div ref={ref} className={styles.content} style={{}}>
          <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas </div>
        </div>
    </button>
  );
}