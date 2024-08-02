import React from 'react';
import { useRouter } from 'next/router';
import cls from './button.module.css';

const Button = ({ href, children, type = 'button' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button className={cls.button} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default Button;