import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToCart } from '../../store/cart/actions';
import { IProduct } from '../../store/product/actions';
import { css } from '../../utils';
import { AccrodionButton } from '../AccordionButton';
import { AddingMessage } from '../AddingMessage';
import { ColorBox } from '../ColorBox';
import { CustomSelect } from '../CustomSelect';
import { SizeBox } from '../SizeBox';
import styles from './productpage.module.scss';

export function ProductPage() {
  const productInfo = useSelector<RootState, IProduct>(state => state.product)
  const [size, setSize] = useState('S(4)');
  const [color, getColor] = useState('Black');
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  
  const [generateMessage, setGenerateMessage] = useState(false);
  const [canIGenerateMessage, setCanIGenerateMessage] = useState(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(buttonRef.current) {
      const pos = buttonRef.current.getBoundingClientRect();
      const x = e.pageX - pos.left;
      const y = e.pageY - pos.top;

      const newRippleStyle = {  
        top: `${y}px`,
        left: `${x}px`,
      }
      
      const ripple = document.createElement("span");
      ripple.setAttribute('class',`${styles.ripple}`);
      css(ripple, newRippleStyle);
      buttonRef.current.appendChild(ripple);

      setTimeout(() => {
        buttonRef.current?.removeChild(ripple);
      }, 3000);
    }

  }

  const getSize = (str: string, e: React.MouseEvent<HTMLDivElement>) => {
    setSize(str);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    dispatch(addToCart({
      img: productInfo.img,
      name: productInfo.name,
      desc: productInfo.desc,
      price: productInfo.price,
      color: color,
      amount: amount,
      size: size,
    }));

    if (canIGenerateMessage) {
      setGenerateMessage(true);
      setTimeout(() => {setGenerateMessage(false)}, 5000)
      setCanIGenerateMessage(false)
      setTimeout(() => {setCanIGenerateMessage(true)}, 5100)
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
            <ColorBox getColor={getColor} name='Light Pink' color='rgb(255, 213, 213)'/>
            <ColorBox getColor={getColor} name='Orange'/>
            <ColorBox getColor={getColor} name='Blue'/>
            <ColorBox getColor={getColor} name='Black'/>
            <ColorBox getColor={getColor} name='Red'/>
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
              <div style={{marginRight: '2rem'}}>
                <CustomSelect getAmount={setAmount}></CustomSelect>
              </div>
              <button ref={buttonRef} onMouseDown={handleMouseDown} onClick={handleClick} type='submit' className={styles.submitButton}> 
                Add to cart
              </button>
            </div>
          </div>
        </form>
        {generateMessage ? <AddingMessage /> : null}
        <div>
          <AccrodionButton>Description</AccrodionButton>
          <AccrodionButton>Product Details</AccrodionButton>
          <AccrodionButton>Delivery & Returns</AccrodionButton>
        </div>
      </div>
    </div>
  );
}