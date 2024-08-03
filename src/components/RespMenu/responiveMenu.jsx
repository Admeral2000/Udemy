import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import cls from "./responsiveMenu.module.css";
import Logo from "../../../public/logo.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Menu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={cls.mobileHeader}
      style={{
        transform: isOpen ? 'translate(0px)' : 'translateX(100vw)',
        transition: 'all 0.4s ease-in-out',
      }}
    >
      <div className={cls.mobileHeaderTop}>
        <div className={cls.mobileHeaderLogo}>
          <Image src={Logo} className={cls.logo} alt="Logo" />
        </div>
        <button className={cls.mobileBtn} onClick={closeMenu}>
          <CloseIcon />
        </button>
      </div>

      <ul className={cls.mobileHeaderList}>
        <li className={cls.mobileHeaderItem}>
          <Link href="/mobile" className={cls.mobileHeaderLink} onClick={closeMenu}>
            Service
          </Link>
        </li>
        <li className={cls.mobileHeaderItem}>
          <Link href="/clients" className={cls.mobileHeaderLink} onClick={closeMenu}>
            Clients
          </Link>
        </li>
        <li className={cls.mobileHeaderItem}>
          <Link href="/team" className={cls.mobileHeaderLink} onClick={closeMenu}>
            Command
          </Link>
        </li>
      </ul>

      <div className={cls.mobileHeaderBottom}>
        <div className={cls.callToAction}>
          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <div className={cls.mobileBottomSocial}>
          <Link className={cls.mobileSocialLink} href="/" onClick={closeMenu}>
            <InstagramIcon />
          </Link>
          <Link className={cls.mobileSocialLink} href="/" onClick={closeMenu}>
            <TwitterIcon />
          </Link>
          <Link className={cls.mobileSocialLink} href="/" onClick={closeMenu}>
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;