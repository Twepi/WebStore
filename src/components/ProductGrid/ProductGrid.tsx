import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

export function ProductGrid() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');
  
      try {
        const response = await fetch('https://fakestoreapi.com/products/?limit=20');
        const result = await response.json();

        //const result = await axios.get('https://fakestoreapi.com/products?limit=20');
        setProducts(prev => prev.concat(...result));
        console.log(result);

      } catch (error) {
        setErrorLoading(String(error));
      }
    }

    load();

  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       load()
  //     }
  //   }, {
  //     rootMargin: '100px',
  //   })
    
  //   if(bottomOfList.current) {
  //     observer.observe(bottomOfList.current)
  //   }

  //   return () => {
  //     if(bottomOfList.current) {
  //       observer.unobserve(bottomOfList.current)
  //     }
  //   }

  }, [bottomOfList])

  return (
    
    <div className={styles.cont}>

      {products.map(product => (
        <ProductBox
          key={product.id}
          img={product.image}
          name={product.title}
          desc='blank for now'
          price={product.price}
        />
      ))}

      <div ref={bottomOfList}></div>

    </div>
  );
}


