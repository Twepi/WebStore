import React from "react";
import styles from './heropreview.module.scss';

export function HeroPreview() {

  return (
    <div>
      <img
        className={styles.preview} 
        src="https://wallpaperaccess.com/full/30117.jpg"
        alt=""
      />
    </div>
  );
}