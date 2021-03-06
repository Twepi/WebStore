import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ICartProduct } from '../../store/cart/actions';
import { CartItem } from '../CartItem';
import { FinalForm } from '../FinalForm';
import styles from './cartpage.module.scss';

export function CartPage() {
  const products = useSelector<RootState, ICartProduct[]>(state => state.cart)


  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>my cart</div>  
        {products.map((item, index) => (
          <CartItem 
            key={index}
            id={index}
            name={item.name}
            desc={item.desc}
            img={item.img}
            color={item.color}
            price={item.price}
            amount={item.amount}
            size={item.size}
          />
        ))}
      </div>

      <FinalForm/>
    </div>
  );
}