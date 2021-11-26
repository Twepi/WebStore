import React, { useState } from 'react';
import { FormBox } from '../FormBox';
import styles from './checkoutpage.module.scss'

export function CheckoutPage() {
  const [formValidity, setFormValidity] = useState(false);
  const callbacks = [...Array(9)];
  let temp = true;
  callbacks.map((value) => {value = (isEmpty: boolean, isValid: boolean) => {return isEmpty && isValid }})

  const getValididty = () => {
    callbacks.forEach((value) => {temp = temp && value()})
    setFormValidity(temp)
  }



  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h2>checkout</h2>
          <legend>Contact info</legend>
          <FormBox
            type='email'
            placeholder='Email address'
            errorMessage='Enter a valid email address'
            getFullValidity={callbacks[0]}
          />
          <legend>Shipping info</legend>
          <FormBox
            type='name'
            placeholder='Name'
            getFullValidity={callbacks[1]}
          />
          <FormBox
            type='text'
            placeholder='Streer address'
            getFullValidity={callbacks[2]}
          />
          <FormBox
            type='text'
            placeholder='Apt / Suite / Other (optional)'
            getFullValidity={callbacks[3]}
          />
          <div className={styles.divideBox}>
            <FormBox
              type='text'
              placeholder='City'
              getFullValidity={callbacks[4]}
            />
            <FormBox
              type='text'
              placeholder='Province'
              getFullValidity={callbacks[5]}
            />
          </div>
          <div className={styles.divideBox}>
            <FormBox
              type='text'
              placeholder='Postal Code'
              getFullValidity={callbacks[6]}
            />
            <FormBox
              type='text'
              placeholder='Country'
              getFullValidity={callbacks[7]}
            />
          </div>
          <FormBox
            type='text'
            placeholder='Phone Number'
            getFullValidity={callbacks[8]}
          />
          <button onClick={getValididty} type="submit" className={styles.btn}>Place Your Order</button>
      </form>
    </div>
  );
}