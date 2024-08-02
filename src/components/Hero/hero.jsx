import React from "react"
import Image from "next/image"
import cls from "./hero.module.css"
import Logo from "@/../public/logo.svg";
import Typewriter from 'typewriter-effect';
import Button from "../Button/button";
import HeroImage from "@/../public/hero.svg";


const Hero = () => {
    return (
        <div className={cls.heroSection}>
            <div className="container">
                <div className={cls.heroWrapper}>
                    <div className={cls.heroInfo}>
                        <Image src={Logo} className={cls.heroLogo} />
                        <h1 className={cls.heroTitle}>IT-Outsourcing Company</h1>
                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Development of mobile applications',
                                        'Development and implementation ERP systems',
                                        'User interface, User experience design',
                                        'Optimization IT consulting infrastructure',
                                        'IT consulting',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                }}
                            />
                        </h1>
                        <div className={cls.heroBtn}>
                            <Button href="#contact">Contact</Button>
                        </div>
                    </div>

                    <div className={cls.heroImage}><Image src={HeroImage} alt="Udevs - Software development agency" /></div>
                </div>
            </div>
        </div>
    )
}
export default Hero