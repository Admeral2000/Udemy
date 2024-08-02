import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cls from './navbar.module.css';
import Button from "@/components/Button/button";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from '../../../public/logo.svg';
import Dropdown from '../../../public/dropdown.svg';
import NavMobile from '../../../public/nav-phone.svg';
import NavPointTree from '../../../public/nav-poin-tree.svg';
import NavLayer from '../../../public/nav-layers.svg';
import NavComputer from '../../../public/nav-computer.svg';
import NavSetting from '../../../public/nav-setting.svg';
import NavDelever from '../../../public/nav-delever.svg';
import NavSmsUz from '../../../public/nav-sms.svg';
import NavGoodzone from '../../../public/nav-goodzone.svg';
import NavIman from '../../../public/nav-iman.svg';
import NavRu from '../../../public/nav-ru.svg';
import NavEng from '../../../public/nav-eng.svg';

const HeaderDesktop = ({ toggleMenu }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState({ services: false, portfolio: false, languages: false });

  const handleItemClick = (index) => {
    setActiveItem(index);
    setDropdownOpen({ services: false, portfolio: false, languages: false });
  };

  const handleDropdownToggle = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const servicesItems = [
    {
      href: '#mobile',
      src: NavMobile,
      alt: 'Mobile development',
      text: 'Development of mobile applications',
    },
    {
      href: '/#erp',
      src: NavPointTree,
      alt: 'ERP systems development',
      text: 'Development and implementation ERP systems',
    },
    {
      href: '/#design',
      src: NavLayer,
      alt: 'UX/UI design',
      text: 'User interface, User experience design',
    },
    {
      href: '/#consulting',
      src: NavComputer,
      alt: 'IT Consulting',
      text: 'IT consulting',
    },
    {
      href: '/#optimization',
      src: NavSetting,
      alt: 'Optimization',
      text: 'Optimization IT consulting infrastructure',
    },
  ];

  const portfolioItems = [
    {
      href: '/#delever',
      src: NavDelever,
      alt: 'Delever',
      text: 'Delever',
    },
    {
      href: '/#smsuz',
      src: NavSmsUz,
      alt: 'SmsUz',
      text: 'Sms.Uz',
    },
    {
      href: '/#goodzone',
      src: NavGoodzone,
      alt: 'Goodzone',
      text: 'Goodzone',
    },
    {
      href: '/#iman',
      src: NavIman,
      alt: 'Iman',
      text: 'Iman',
    },
  ];

  const languagesItems = [
    {
      href: '/',
      src: NavRu,
      alt: 'Russian',
      text: 'Рус',
    },
    {
      href: '/',
      src: NavEng,
      alt: 'English',
      text: 'Eng',
    },
  ];

  return (
    <div className="container">
      <nav className={cls.nav}>
        <Link className={cls.logo} href="/">
          <Image
            src={Logo}
            alt="IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры"
          />
        </Link>
        <button type="button" className={cls.burgerIcon} onClick={toggleMenu}>
          <DehazeIcon />
        </button>

        <ul className={cls.navItems}>
          <li
            className={`${cls.navItem} ${activeItem === 0 ? cls.active : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <Link href="#directs">Direction</Link>
          </li>
          <li
            className={`${cls.navItem} ${activeItem === 1 ? cls.active : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <Link href="#team">Command</Link>
          </li>

          <li
            className={`${cls.navItem} ${dropdownOpen.services ? cls.active : ''}`}
            onMouseEnter={() => handleDropdownToggle('services')}
            onMouseLeave={() => handleDropdownToggle('services')}
          >
            <Link href="/#services">
              <span>Services</span> <Image src={Dropdown} alt="dropdown icon" />
            </Link>
            {dropdownOpen.services && (
              <ul className={cls.dropdown}>
                <p>Services</p>
                {servicesItems.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(2 + index)}>
                    <Link href={item.href}>
                      <Image src={item.src} alt={item.alt} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className={`${cls.navItem} ${activeItem === 4 ? cls.active : ''}`}
            onClick={() => handleItemClick(4)}
          >
            <Link href="/#tools">Tools</Link>
          </li>
          <li
            className={`${cls.navItem} ${activeItem === 5 ? cls.active : ''}`}
            onClick={() => handleItemClick(5)}
          >
            <Link href="/#clients">Clients</Link>
          </li>
          <li
            className={`${cls.navItem} ${dropdownOpen.portfolio ? cls.active : ''}`}
            onMouseEnter={() => handleDropdownToggle('portfolio')}
            onMouseLeave={() => handleDropdownToggle('portfolio')}
          >
            <Link href="/">
              <span>Portfolio</span> <Image src={Dropdown} alt="dropdown icon" />
            </Link>
            {dropdownOpen.portfolio && (
              <ul className={cls.dropdown}>
                <p>Portfolio</p>
                {portfolioItems.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(6 + index)}>
                    <Link href={item.href}>
                      <Image src={item.src} alt={item.alt} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className={`${cls.navItem} ${dropdownOpen.languages ? cls.active : ''}`}
            onMouseEnter={() => handleDropdownToggle('languages')}
            onMouseLeave={() => handleDropdownToggle('languages')}
          >
            <Link href="/">
              <span>Language</span> <Image src={Dropdown} alt="dropdown icon" />
            </Link>
            {dropdownOpen.languages && (
              <ul className={`${cls.dropdown} ${cls.dropdownLang}`}>
                {languagesItems.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(8 + index)}>
                    <Link href={item.href}>
                      <Image src={item.src} alt={item.alt} />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={cls.navBtn}>
            <Button href="#contact">Contact</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderDesktop;