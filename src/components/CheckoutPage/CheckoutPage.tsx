import React from 'react';
import styles from './checkoutpage.module.scss'

export function CheckoutPage() {




  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>checkout</h2>
          <legend>Contact info</legend>
          <input
            type='email'
            placeholder='Email address'
          />
          <legend>Shipping info</legend>
          <input
            type='name'
            placeholder='Name'
          />
          <input
            type='text'
            placeholder='Streer address'
          />
          <input
            type='text'
            placeholder='Apt / Suite / Other (optional)'
          />
          <div className={styles.divideBox}>
            <input
              type='text'
              placeholder='City'
            />
            <input
              type='text'
              placeholder='Province'
            />
          </div>
          <div className={styles.divideBox}>
            <input
              type='text'
              placeholder='Postal Code'
            />
            <input
              type='text'
              placeholder='Country'
            />
          </div>
          <input
            type='text'
            placeholder='Phone Number'
          />
      </div>
    </div>
  );
}