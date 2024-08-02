import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import cls from "./Conatacts.module.css";
import TextField from '@mui/material/TextField';
import Location from '../../../public/location.svg';
import Phone from '../../../public/contactPhone.svg';
import Mail from '../../../public/conatctMail.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const modalRef = useRef(null);
    const wrapperRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && email) {
            const emailRegex = /@.*\..*/;
            if (emailRegex.test(email)) {
                setModalVisible(true);
            } else {
                alert("Please enter a valid email address.");
            }
        } else {
            alert("Please fill in all required fields.");
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleClickOutside = (event) => {
        // Agar bosilgan joy `acceptedWrapper` ichida bo'lmasa
        if (
            modalVisible &&
            modalRef.current &&
            !wrapperRef.current.contains(event.target)
        ) {
            setModalVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [modalVisible]);

    return (
        <div className={cls.contact} id="contact">
            <div className="container">
                <h2 className="title">Contact us</h2>
                <div className={cls.contactWrapper}>
                    <h3 className={cls.contactTitle}>Leave us a message</h3>
                    <div className={cls.wrapper}>
                        <div className={cls.contactInner}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    className={cls.inputbox}
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '18px',
                                            lineHeight: '21.3768px',
                                            letterSpacing: '0.16884px',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            fontWeight: '400'
                                        }
                                    }}
                                />
                                <TextField
                                    className={cls.inputbox}
                                    id="outlined-basic"
                                    label="Your email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '18px',
                                            lineHeight: '21.3768px',
                                            letterSpacing: '0.16884px',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            fontWeight: '400'
                                        }
                                    }}
                                />
                                <TextField
                                    className={cls.inputbox}
                                    id="outlined-multiline-static"
                                    label="Briefly describe your project"
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    sx={{ height: 122.5 }}
                                    InputProps={{
                                        style: { height: '100%' }
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            fontSize: '18px',
                                            lineHeight: '21.3768px',
                                            letterSpacing: '0.16884px',
                                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                            fontWeight: '400'
                                        }
                                    }}
                                />
                                <div className={cls.contactBtn}>
                                    <button type='submit'>Send</button>
                                </div>
                            </form>
                        </div>
                        <div className={cls.contactInner}>
                            <ul className={cls.contactList}>
                                <li className={cls.contactListItem}>
                                    <Link className={cls.itemLink} href={'https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor'} target='_blank'>
                                        <Image src={Location} alt='Location' />
                                        {'Ташкент,  Юнусабадский район, проспект Амира Темура, 129Б'}
                                    </Link>
                                </li>
                                <li className={cls.contactListItem}>
                                    <Link className={cls.itemLink} href={'tel:+998336600999'}>
                                        <Image src={Phone} alt='phone' style={{ color: '1B5BF7', marginRight: '6px' }} />
                                        {'+998 33 66 00 999'}
                                    </Link>
                                </li>
                                <li className={cls.contactListItem}>
                                    <Link className={cls.itemLink} href={'mailto:azizbek.b@udevs.io'}>
                                        <Image src={Mail} alt='Email icon' style={{ color: '1B5BF7', marginRight: '6px' }} />
                                        {'azizbek.b@udevs.io'}
                                    </Link>
                                </li>
                                <li className={cls.contactListItem}>
                                    <Link className={cls.itemLink} href={'https://t.me/azizbekbakhodirov'} target='_blank'>
                                        <TelegramIcon style={{ color: '1B5BF7', marginRight: '6px', fontSize: '1.7rem' }} />
                                        <strong style={{ color: "#1B5BF7" }}> t.me/azizbekbakhodirov</strong>
                                    </Link>
                                </li>
                            </ul>
                            <div className={cls.social}>
                                <Link href='/' className={cls.socialLinks} target='_blank'>
                                    <YouTubeIcon />
                                </Link>
                                <Link href='/' className={cls.socialLinks} target='_blank'>
                                    <InstagramIcon />
                                </Link>
                                <Link href='/' className={cls.socialLinks} target='_blank'>
                                    <FacebookIcon />
                                </Link>
                                <Link href='/' className={cls.socialLinks} target='_blank'>
                                    <TwitterIcon />
                                </Link>
                            </div>
                            <div
                                className={cls.acceptedModal}
                                style={{ opacity: modalVisible ? '1' : '0', zIndex: modalVisible ? '999999999' : '-3' }}
                                ref={modalRef}
                            >
                                <div className={cls.acceptedWrapper} ref={wrapperRef}>
                                    <CheckCircleIcon />
                                    <h3>Your application is accepted</h3>
                                    <p>We will contact you soon</p>
                                    <span className={cls.modalClose} onClick={handleCloseModal}>
                                        <CloseIcon />
                                    </span>
                                </div>
                            </div>

                            <div className={cls.contactMap}>
                                <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor" width={400} height={200} title='Udevs location' aria-hidden={false}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
