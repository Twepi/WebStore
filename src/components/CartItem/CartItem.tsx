import React from 'react';
import { ICartProduct } from '../../store/cart/actions';
import styles from './cartitem.module.scss'

export function CartItem({ name, desc, img, price, amount, size }: ICartProduct) {

  return(
    <div className={styles.container}>
      <div className={styles.productBlock}>
        <img className={styles.preview} src={img} alt="" />
        <div className={styles.infGrid}>
          <div className={styles.title}>{name}</div>
          <div className={styles.items}>
            <div style={{fontSize: '1.6rem', margin: '1rem 0'}}>{desc}</div>
            <div>Size - {size}</div>
            <div>Color - Pink</div>
          </div>
          <a className={styles.remove}>Remove</a>
        </div>
        <div className={styles.controls}>
          <div className={styles.quantity}>
            <div className={styles.dropdown}>
              <label style={{fontSize: "1.2rem"}} htmlFor="dropdown-cart">Quantity</label>
              <select onChange={()=>{}} name="dropdown-cart" id="dropdown-cart" className={styles.dropdownSelect}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10+</option>
              </select>
            </div>
          </div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
}