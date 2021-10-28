import React from 'react';
import { ICartProduct } from '../../store/cart/actions';
import styles from './cartitem.module.scss'

export function CartItem({ name, desc, img, price, amount, size }: ICartProduct) {

  return(
    <div>
       {name}
    </div>
  );
}