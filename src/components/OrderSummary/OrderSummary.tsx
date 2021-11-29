import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ICartProduct } from '../../store/cart/actions';
import styles from './ordersummary.module.scss'

export function OrderSummary() {
  const products = useSelector<RootState, ICartProduct[]>(state => state.cart)



  return (
    <div className={styles.container}>
      <span>Order Summary</span>
      <div className={styles.divideLine}></div>
      {products.map((item) => (
        <div>
          <div>{item.name}</div>
          <img src={item.img} alt="" />
          <div>{item.desc}</div>
          <div>{item.amount}</div>
          <div>{item.price}</div>
          <div>Sub-total</div>
          <div>{Number(item.price.replaceAll('$','')) * item.amount}</div>
        </div>
      ))}
    </div>
  );
}