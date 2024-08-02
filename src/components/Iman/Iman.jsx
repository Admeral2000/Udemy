import Image from "next/image";
import cls from "../Delever/Delever.module.css";
import style from "./Iman.module.css";
import ImanBrand from "../../../public/ImanBrand.svg";
import Finance from "../../../public/imanLogoBuilding.svg";
import ImanAppImg from "../../../public/imanAppImg.png";
import AdminPanel from "../../../public/adminPanel.svg";
import Crossplatform from "../../../public/phones.svg";
import MobileDesign from "../../../public/designMobile.svg";
import SmallCards from "../SmallCards/SmallCards";


export default function SmsUz() {
    const designItems = [
        {
            text: 'Mobile design',
            image: MobileDesign,
            alt: 'Mobile design',
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
        <div className={cls.deleverSection} id="iman">
            <div className="container">
                <div className={`${cls.wrapper} ${style.wrapperAddStyle}`}>
                    <div className={cls.wrapperInner} style={{ opacity: '1', transform: 'none' }}>
                        <div className={cls.title}>
                            <Image src={ImanBrand} alt="Iman Brand" className={cls.brend} />
                            <span className={cls.projectType} style={{ backgroundColor: 'rgba(1,202,176,0.2)', color: '#01CAB0' }}>
                                <Image src={Finance} alt="finance logo" />
                                {'Finance'}
                            </span>
                        </div>

                        <div className={`${cls.wrapperInner} ${cls.innerRespons}`}>
                            <div className={cls.imgWrapper}>
                                <Image src={ImanAppImg} alt="Iman App" style={{ opacity: '1', transform: 'none' }} />
                            </div>
                        </div>

                        <p className={cls.description}>
                            {'Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.'}
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
                            <Image src={ImanAppImg} alt="Iman app image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}