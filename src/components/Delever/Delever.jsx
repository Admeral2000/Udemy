import Image from "next/image";
import cls from "./Delever.module.css";
import DeleveTitle from "../../../public/deleveTitle.svg";
import Delevelogo from "../../../public/deleverylogo.svg";
import DeliveryAppImg from "../../../public/delever_app_img.png";
import Website from "../../../public/internet.svg";
import AdminPanel from "../../../public/adminPanel.svg";
import Crossplatform from "../../../public/phones.svg";
import WebDesign from "../../../public/designComputer.svg";
import MobileDesign from "../../../public/designMobile.svg";
import SmallCards from "../SmallCards/SmallCards";


export default function Delever() {
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
    {
      text: 'Web design',
      image: WebDesign,
      alt: 'Web design',
    },
    {
      text: 'Mobile design',
      image: MobileDesign,
      alt: 'Mobile design',
    },


  ];
  return (
    <div className={cls.deleverSection} id="delever">
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.wrapperInner} style={{ opacity: '1', transform: 'none' }}>
            <div className={cls.title}>
              <Image src={DeleveTitle} alt="Delever" className={cls.brend} />
              <span className={cls.projectType} style={{ backgroundColor: 'rgba(255,87,34,0.2)', color: '#FF5722' }}>
                <Image src={Delevelogo} alt="Delevery" />
                {'Delivery'}
              </span>
            </div>

            <div className={`${cls.wrapperInner} ${cls.innerRespons}`}>
              <div className={cls.imgWrapper}>
                <Image src={DeliveryAppImg} alt="Deliver App" style={{ opacity: '1', transform: 'none' }} />
              </div>
            </div>

            <p className={cls.description}>
              {'Delever - Delivery service automation targeted at both consumers and restaurants.'}
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
            <div className={cls.imgWrapper}>
              <Image src={DeliveryAppImg} alt="Delever app image" style={{ maxHeight: '408px' }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}