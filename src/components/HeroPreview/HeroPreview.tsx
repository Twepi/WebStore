import React from "react";
import styles from './heropreview.module.scss';

export function HeroPreview() {

  return (
    <div>
      <img
        className={styles.preview} 
        src="https://c.wallhere.com/photos/ed/6a/flowers_pixel_art_trees_stars-1903333.jpg!d"
        alt=""
      />
    </div>
  );
}