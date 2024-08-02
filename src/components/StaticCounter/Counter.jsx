import { useEffect, useState, useRef } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [plusSign, setPlusSign] = useState(false);
  const counterRef = useRef();

  useEffect(() => {
    let observer;
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = 100;
        const delay = 20;
        const incrementValue = 1;

        const incrementCounter = () => {
          start += incrementValue;
          if (start >= end) {
            start = end;
            setCount(start);
            setPlusSign(true);
          } else {
            setCount(Math.round(start));
            setTimeout(incrementCounter, delay);
          }
        };

        incrementCounter();
        observer.disconnect();
      }
    };

    if (counterRef.current) {
      observer = new IntersectionObserver(handleIntersection);
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.counter} ref={counterRef}>
      {count}
      <span className={`${styles.plusSign} ${plusSign ? styles.visible : ''}`}>+</span>
    </div>
  );
};

export default Counter;
