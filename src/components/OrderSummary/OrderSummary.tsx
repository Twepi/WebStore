import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { ICartProduct } from '../../store/cart/actions';
import styles from './ordersummary.module.scss'

export function OrderSummary() {
  const products = useSelector<RootState, ICartProduct[]>(state => state.cart)
  let orderTotal = 0;
  products.forEach((item) => {orderTotal += Number(item.price.replace('$', ''))})


  return (
    <div className={styles.container}>
      <div className={styles.headerCont}>
        <div className={styles.orderSummary}>Order Summary</div>
        <Link to='/cart'>
          <div className={styles.modifyOrder}>Modify order</div>
        </Link>
      </div>
      {products.map((item) => (
        <div>
          <div className={styles.divideLine}></div>
          <div>{item.name}</div>
          <div className={styles.itemCont}>
            <img src={item.img} alt="" />
            <div className={styles.itemDescCont}>
              <div className={styles.itemDesc}>{item.desc}</div>
              <div className={styles.itemSize}>{item.size}</div>
            </div>
            <div className={styles.priceCont}>
              <div className={styles.amount}>{item.amount + ' x '}</div>
              <div className={styles.price}>{item.price + ' USD'}</div>
            </div>
          </div>
          <div className={styles.subTotalCont}>
            <div>Sub-total</div>
            <div>{'$' + (item.amount * Number(item.price.replace('$', ''))) + ' USD'}</div>
          </div>
        </div>
      ))}
      <div className={styles.divideLine} style={{marginBottom: '0'}}></div>
      <div className={styles.orderTotalCont}>
        <div>Order total</div>
        <div>{'$' + orderTotal + ' USD'}</div>
      </div>
    </div>
  );
}