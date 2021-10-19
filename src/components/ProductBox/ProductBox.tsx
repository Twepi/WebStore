import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { setProduct } from '../../store/product/actions';
import { HeroPreview } from '../HeroPreview';
import { ProductImage } from '../ProductImage/ProductImage';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import styles from './productbox.module.scss';

interface IProps{
  img: string;
  name: string;
  desc: string;
  price: string;

}

export function ProductBox({ img, name, desc, price }: IProps) {
  const dispatch = useDispatch();

  const handleClick = (props: IProps) => {
    dispatch(setProduct(props));
  }

  return(
    <div className={styles.container}>
      <Link to='/productpage' onClick={() => handleClick({ img, name, desc, price })}>
        <ProductImage img={img}/> 
      </Link>
      <ProductTitle name={name} desc={desc} price={price}/>
    </div>
  );
}