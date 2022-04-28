import React, { useEffect, useRef, useState } from 'react';
import { RootObject } from '../../interfaces/products';
import { LoaderAnim } from '../LoaderAnim';
import { ProductBox } from '../ProductBox';
import styles from './productgrid.module.scss';

interface IProps {
  data: RootObject[]
}

export function ProductGrid({ data }: IProps) {
  const [products, setProducts] = useState<any[]>([...Array(8)]);
  const [loading, setLoading] = useState(false)


  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {console.log(data)}, [])

  useEffect(() => {
    async function load() {
      setLoading(true)
      
      try {
        const answer = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([...Array(8)])
          }, 2000)
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

      {Object.values(data).map((el, index) => 
      {
        return (
        
        <ProductBox
            key={index}
            img={el.fields.img_url}
            name={el.fields.product_name}
            desc={el.fields.description}
            price={'$' + String (el.fields.price)}
        />
      )})}
      

      {/* <div ref={bottomOfList}></div>
      {loading && (
        <LoaderAnim/>
      )} */}
    </div>
  );
}


