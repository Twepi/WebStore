import React, { useEffect, useRef, useState } from 'react';
import styles from './colorbox.module.scss'

interface IColorBox {
  name: string,
  color?: string,
  getColor: (color: string) => void;
}

const checkedStyle = {
  borderColor: 'transparent',
  outline: '2px solid #6622cc'
}

const uncheckedStyle = {
  borderColor: '#b8bdc5',
  outline: 'none'
}

export function ColorBox({name, color=name.toLocaleLowerCase(), getColor}: IColorBox) {
  const ref = useRef<HTMLInputElement>(null);
  const [currentStyle, setCurrentStyle] = useState(uncheckedStyle);

  useEffect(() => {
    if(ref.current?.checked){
      setCurrentStyle(checkedStyle)
    } else {
      setCurrentStyle(uncheckedStyle)
    }
  }, [ref.current?.checked])

  return (
    <label
      htmlFor={name}
      onClick={() => {getColor(name)}}
      className={styles.container}
      style={currentStyle}
    >
      <input ref={ref} className={styles.colorInput} type="radio" name='color' id={name} />
      <div
        style={{backgroundColor: color}}
        className={styles.colorCircle}
      ></div>
      <span>{name}</span>
    </label>
  );
}