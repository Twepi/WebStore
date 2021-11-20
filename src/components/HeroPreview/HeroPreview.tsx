import React from "react";
import styles from './heropreview.module.scss';

export function HeroPreview() {

  return (
    <div>
      <img
        className={styles.preview} 
        src="https://previews.dropbox.com/p/thumb/ABUrEmUmF-N1R5DCrrZYIOADuoFTWAWmqwKI0dtmYxn2Px_1Rrja7UrrVKA7O62HW6MnZR40raENxI7pzKqxHcMGOUKK1HQall3FC-QPeIZhmm6Kp9miN5IGh9QfOZAB_191vlz25cEEQ1JN_Ow3xgN6Aqe2oIXU7EOvSTGySpmd2LRJiyIXgsuVxxZFiVT3TkXgGFF1hSDK0UflNKfNpRo7AxQZ_sep6_hprCYyOzQt3qU22wz30FOVeG3ti8z1NLIDabL4K18uYgeSRMxbauCTN2Tn4vaXSbgZoNO9pI6OU6bu8x9elzE3g3YKOMqgV33ZJP2pMH8zMmqEqITrWuP1yuoKa5ALXf5Rd-G_sPdpJw/p.png"
        alt=""
      />
    </div>
  );
}