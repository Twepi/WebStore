import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { delFromCart, ICartProduct, updateAmount } from '../../store/cart/actions';
import { CustomSelect } from '../CustomSelect';
import styles from './cartitem.module.scss'

export function CartItem({ name, id, desc, img, price, amount, size, color }: ICartProduct) {

  const [ amountNow, setAmountNow ] = useState(amount);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(delFromCart(id))
  }

  useEffect(() => {
    dispatch(updateAmount(id, amountNow))
  },[amountNow])

  return(
    <div className={styles.container}>
      <div className={styles.productBlock}>
        <img className={styles.preview} src={img} alt="" />
        <div className={styles.infGrid}>
          <div className={styles.title}>{name}</div>
          <div className={styles.items}>
            <div style={{fontSize: '1.6rem', margin: '1rem 0'}}>{desc}</div>
            <div>Size - {size}</div>
            <div>Color - {color}</div>
          </div>
          <button onClick={removeFromCart} className={styles.remove}>Remove</button>
        </div>
        <div className={styles.controls}>
          <div className={styles.quantity}>
            <div className={styles.dropdown}>
              <label style={{fontSize: "1.2rem"}}>Quantity</label>
              <CustomSelect value={amount} getAmount={setAmountNow}></CustomSelect>
            </div>
          </div>
          <div className={styles.price}>${Number(price.replaceAll('$',''))*amountNow}</div>
        </div>
      </div>
    </div>
  );
}