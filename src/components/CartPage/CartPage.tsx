import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ICartProduct } from '../../store/cart/actions';
import { CartItem } from '../CartItem';
import styles from './cartpage.module.scss';

export function CartPage() {
  const products = useSelector<RootState, ICartProduct[]>(state => state.cart)


  return (
    <div className={styles.container}>
      {products.map((item, index) => {
        <CartItem 
          key={index}
          name={item.name}
          desc={item.desc}
          img={item.img}
          price={item.price}
          amount={item.amount}
          size={item.size}
        />
      })}
      <div>adadmaskmd;alsd</div>
    </div>
  );
}