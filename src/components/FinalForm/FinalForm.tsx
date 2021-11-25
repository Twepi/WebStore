import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ICartProduct } from "../../store/cart/actions";
import styles from "./finalform.module.scss";

export function FinalForm() {
  const products = useSelector<RootState, ICartProduct[]>(
    (state) => state.cart
  );
  const [summary, setSummary] = useState(0);

  useEffect(() => {
    let sum = 0;
    products.forEach(
      (item) => (sum += item.amount * Number(item.price.replace("$", "")))
    );
    setSummary(sum)
  });

  return (
    <div className={styles.container}>
      <h1>Summary</h1>
      <div className={styles.textFlex}>
        <span>Total</span>
        <span>${summary}</span>
      </div>
      <span className={styles.info}>
        Shipping $ taxes are calculated at checkout
      </span>
      <div className={styles.separate}></div>
    </div>
  );
}
