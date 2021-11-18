import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

interface IProps {
  data: {
    img: string;
    name: string;
    desc: string;
    price: string;
  }
}

export function ProductGrid({data}: IProps) {
  const [products, setProducts] = useState<any[]>([...Array(8)]);
  const [loading, setLoading] = useState(false)

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      setLoading(true)
      
      try {
        const answer = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([...Array(8)])
          }, 1000)
        })
        setProducts(prevChild => prevChild.concat(answer))

      } catch (e) {
        console.log(String(e))
      }

      setLoading(false)
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load()
      }
    }, {
      // родитель целевого элемента - область просмотра
      root: null,
      // без отступов
      rootMargin: '0px',
      // процент пересечения - половина изображения
      threshold: 0.5
    })
    
    if(bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if(bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }


  }, [bottomOfList])

  return (
    
    <div className={styles.cont}>
      {products.length === 0 && !loading && (
        <div className={styles.loading}>Нет ни одного поста</div>
      )}

      {products.map((_, index) => (
        <ProductBox
            key={index}
            img={data.img}
            name={data.name}
            desc={data.desc}
            price={data.price}
        />
      ))}

      <div ref={bottomOfList}></div>
      {loading && (
        <div className={styles.loading}>Загрузка...</div>
      )}
    </div>
  );
}


