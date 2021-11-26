import React, { useEffect, useRef, useState } from "react";
import styles from "./formbox.module.scss";

interface IFormBox {
  type: string;
  placeholder: string;
  errorMessage?: string;
}

export function FormBox({ type, placeholder, errorMessage }: IFormBox) {
  const [valid, setValid] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  const checkValidityChange = () => {
    if (ref.current) {
      setValid(ref.current.checkValidity());
    }
  }

  useEffect(() => {
    if (ref.current) {
      if (valid && ref.current.value !== "") {
        ref.current.style.backgroundColor = "#e8f0fe";
      }
      else {
        ref.current.style.backgroundColor = "white";
      }
    }
  }, [valid])

  return (
    <div className={styles.container}>
      <input 
        ref={ref}
        onChange={checkValidityChange}
        name="formInput" type={type}
        placeholder={placeholder}
        onBlur={() => {if (ref.current && ref.current.value === "") ref.current.style.backgroundColor = "white";}}
      />

      {!valid && errorMessage && (
        <span>{'* '.concat(errorMessage)}</span>
      )}
    </div>
  );
}
