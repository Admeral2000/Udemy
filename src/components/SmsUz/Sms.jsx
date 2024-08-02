import Image from "next/image";
import cls from "../Delever/Delever.module.css";
import style from "./Sms.module.css";
import SmsUzBrand from "../../../public/smsuzBrand.svg";
import Mail from "../../../public/mail.svg";
import SmsUzAppImg from "../../../public/SmsuzAppImg.png";
import Website from "../../../public/internet.svg";
import AdminPanel from "../../../public/adminPanel.svg";
import Crossplatform from "../../../public/phones.svg";
import SmallCards from "../SmallCards/SmallCards";


export default function SmsUz() {
    const designItems = [
        {
            text: 'Website',
            image: Website,
            alt: 'Website',
        },
        {
            text: 'Admin panel',
            image: AdminPanel,
            alt: 'Admin panel',
        },
        {
            text: 'Crossplatform',
            image: Crossplatform,
            alt: 'Crossplatform',
        },

    ];
    return (
        <div className={cls.deleverSection} id="smsuz">
            <div className="container">
                <div className={`${cls.wrapper} ${style.wrapperAddStyle}`}>
                    <div className={cls.wrapperInner} style={{ opacity: '1', transform: 'none' }}>
                        <div className={cls.title}>
                            <Image src={SmsUzBrand} alt="SmsUzBrand" className={cls.brend} />
                            <span className={cls.projectType} style={{ backgroundColor: 'rgba(68,115,229,0.2)', color: '#4473E5' }}>
                                <Image src={Mail} alt="Mail" />
                                {'Notification'}
                            </span>
                        </div>

                        <div className={`${cls.wrapperInner} ${cls.innerRespons}`}>
                            <div className={cls.imgWrapper}>
                                <Image src={SmsUzAppImg} alt="Deliver App" style={{ opacity: '1', transform: 'none' }} />
                            </div>
                        </div>

                        <p className={cls.description}>
                            {'Smsuz.uz - It is a platform for bulk SMS messaging.'}
                        </p>

                        <div className={cls.services}>
                            <h3>What we did?</h3>
                            <div className={cls.servicesWrapper}>
                                {designItems.map((item) => (
                                    <SmallCards
                                        key={item}
                                        text={item.text}
                                        image={item.image}
                                        alt={item.alt}
                                        cardClass={cls.customCard}
                                        imageClass={cls.customImage}
                                        textClass={cls.customText}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`${cls.wrapperInner} ${cls.innerDesktop}`}>
                        <div className={`${cls.imgWrapper} ${style.imgWrapperAddStyle}`}>
                            <Image src={SmsUzAppImg} alt="Delever app image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}