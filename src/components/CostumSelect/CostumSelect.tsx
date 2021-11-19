import React, { useEffect, useRef, useState } from "react";
import styles from "./costumselect.scss";

export function CostumSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<String | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const options = ['1','2','3','4','5', '6', '7', '8', '9', '10+'];

  const toggling = () => setIsOpen(!isOpen);
  const handleOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const checkClick = (event: MouseEvent) => {
    if (!(event.target instanceof Node && ref.current?.contains(event.target))) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', checkClick)
    return () => {
      document.removeEventListener('click', checkClick)
    }
  }, [])

  return (
    <div ref={ref} className={styles.container}>
      <div onClick={toggling} className={styles.dropdownHeader}>
        {selectedOption || options[0]}
        {isOpen && (
          <ul className={styles.dropdownList}>
            {options.map((option, index) => (
              <li onClick={() => handleOptionClicked(option)} key={index}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
