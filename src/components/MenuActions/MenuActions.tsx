import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { ICartProduct } from '../../store/cart/actions';
import styles from './menuactions.module.scss'

export function MenuActions() {

  const cart = useSelector<RootState, ICartProduct[]>(state => state.cart)
  const cartAmount = cart.length;
  

  return (
    <div className={styles.container}>
      
      <Link className={styles.baglink} to="/cart">
        {cartAmount !== 0 && (
          <div style={{color: "white"}} className={styles.cartAmount}>{cartAmount}</div>
        )}
        <svg className={styles.bag}
        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g clipPath="url(#clip0)">
            <path d="M22.0749 21.24C22.1014 21.4796 22.0771 21.7221 22.0035 21.9516C21.93 22.1812 21.8089 22.3926 21.6481 22.5722C21.4873 22.7518 21.2904 22.8954 21.0703 22.9937C20.8503 23.0921 20.6119 23.1429 20.3709 23.1429H3.62915C3.38811 23.1429 3.14977 23.0921 2.9297 22.9937C2.70963 22.8954 2.51276 22.7518 2.35196 22.5722C2.19116 22.3926 2.07003 22.1812 1.99649 21.9516C1.92295 21.7221 1.89864 21.4796 1.92515 21.24L3.42858 7.71429H20.5714L22.0749 21.24Z"></path>
            <path d="M7.71428 7.71429V5.14286C7.71428 4.00622 8.16581 2.91613 8.96954 2.1124C9.77326 1.30867 10.8634 0.857143 12 0.857143C13.1366 0.857143 14.2267 1.30867 15.0305 2.1124C15.8342 2.91613 16.2857 4.00622 16.2857 5.14286V7.71429"></path>
          </g>
          <defs><clipPath id="clip0"><rect width="24" height="24"></rect></clipPath></defs>
        </svg>
      </Link>

    </div>
  );
}