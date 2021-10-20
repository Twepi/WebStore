import React, { FormEventHandler, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IProduct } from '../../store/product/actions';
import { AccrodionButton } from '../AccordionButton';
import { SizeBox } from '../SizeBox';
import styles from './productpage.module.scss';

export function ProductPage() {
  const productInfo = useSelector<RootState, IProduct>(state => state.product)
  const [size, setSize] = useState('S(4)');
  const refSelect = useRef<HTMLSelectElement>(null);

  const getSize = (str: string, e: React.MouseEvent<HTMLDivElement>) => {
    setSize(str);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('size = ', size);
    if (refSelect.current) {
      console.log('amount = ', refSelect.current.value)
    }
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.preview} 
        src={productInfo.img} alt="" 
      />

      <div className={styles.infoContainer}>
        <div style={{marginBottom: '4rem'}}>
          <div className={styles.header}>
            <h4>{productInfo.name}</h4>
            <h2>{productInfo.price}</h2>
          </div>

          <p>{productInfo.desc}</p>
        </div>

        <form>
          <div style={{marginBottom: '2rem'}}>
            <span className={styles.label}>color</span>
            <div className={styles.colorBox}>
              <div className={styles.colorCircle}></div>
              <span>Light Pink</span>
            </div>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <span className={styles.label}>size</span>
            <div className={styles.sizeListing}>
              <SizeBox handleClick={getSize}>S (4)</SizeBox>
              <SizeBox handleClick={getSize}>M (6-8)</SizeBox>
              <SizeBox handleClick={getSize}>L (10-12)</SizeBox>
              <SizeBox handleClick={getSize}>XL (14-16)</SizeBox>
              <SizeBox handleClick={getSize}>2XL (18-20)</SizeBox>
              <SizeBox handleClick={getSize}>3XL (22-24)</SizeBox>
            </div>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <div style={{marginRight: '2rem', display: 'flex'}}>
              <div className={styles.dropdown}>
                <select ref={refSelect} name="dropdown" id="dropdown" className={styles.dropdownSelect}>
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
              <button onClick={handleClick} type='submit' className={styles.submitButton}>Add to cart</button>
            </div>
          </div>
        </form>

        <div>
          <AccrodionButton>Description</AccrodionButton>
          <AccrodionButton>Product Details</AccrodionButton>
          <AccrodionButton>Delivery & Returns</AccrodionButton>
        </div>
      </div>
    </div>
  );
}