import Image from "next/image";
import cls from "./Clients.module.css";
import ClientsImg from "../../components/Data/ClientsImg";

export default function Clients() {
    return (
        <div className={cls.clientsSection} id="clients">
            <div className="container">
                <h2 className={`title ${cls.clientsTitle}`}>Our clients</h2>
            </div>

            {/* First marqueContent with images from firstWrapper */}
            <div className={cls.marqueContent} style={{ marginTop: '60px' }}>
                <div className={cls.marqueContentInner}>

                    <div className={cls.cardWrapper} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.firstWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '50px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cls.cardWrapper} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.firstWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '50px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cls.cardWrapper} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.firstWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '50px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Second marqueContent with images from secondWrapper */}
            <div className={cls.marqueContent}>
                <div className={cls.marqueContentInner}>

                    <div className={`${cls.cardWrapper} ${cls.addStyle}`} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.secondWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '7px', marginRight: '43px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`${cls.cardWrapper} ${cls.addStyle}`} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.secondWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '7px', marginRight: '43px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`${cls.cardWrapper} ${cls.addStyle}`} style={{ animationDuration: '151.9s' }}>
                        {ClientsImg.secondWrapper.map((item, index) => (
                            <div className={cls.card} key={index}>
                                <div className={cls.cardItem}>
                                    <Image src={item.image} alt='clients' className={cls.marqueeImg} style={{ marginLeft: '7px', marginRight: '43px' }} width={213} height={128} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
