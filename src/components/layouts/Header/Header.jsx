import * as React from 'react';
import cls from './header.module.css';
import Navbar from '@/components/navbar/navbar';
import MobileMenu from '@/components/RespMenu/responiveMenu';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={cls.header}>
        <Navbar toggleMenu={toggleMenu} />
      </header>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
}
