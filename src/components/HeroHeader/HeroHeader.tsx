import React from "react";
import styles from './heroheader.module.scss'

interface IProps {
  text: string;
}

export function HeroHeader({ text }: IProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{text}</h2>
    </div>
  );
}