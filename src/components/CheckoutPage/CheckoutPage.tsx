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
          <legend>Shipping info</legend>
          <FormBox
            type='name'
            placeholder='Name'
          />
          <FormBox
            type='text'
            placeholder='Streer address'
          />
          <FormBox
            type='text'
            placeholder='Apt / Suite / Other (optional)'
          />
          <div className={styles.divideBox}>
            <FormBox
              type='text'
              placeholder='City'
            />
            <FormBox
              type='text'
              placeholder='Province'
            />
          </div>
          <div className={styles.divideBox}>
            <FormBox
              type='text'
              placeholder='Postal Code'
            />
            <FormBox
              type='text'
              placeholder='Country'
            />
          </div>
          <FormBox
            type='text'
            placeholder='Phone Number'
          />
      </div>
    </div>
  );
}