import React from 'react';
import { FormBox } from '../FormBox';
import styles from './checkoutpage.module.scss'

export function CheckoutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>checkout</h2>
          <legend>Contact info</legend>
          <FormBox
            type='email'
            placeholder='Email address'
            errorMessage='Enter a valid email address'
          />
      </div>
    </div>
  );
}