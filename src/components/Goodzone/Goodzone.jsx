import Image from "next/image";
import cls from "../Delever/Delever.module.css";
import style from "./Goodzone.module.css";
import GoodzoneTitle from "../../../public/goodzone.png";
import Goodzonelogo from "../../../public/goodzoneLogoBucket.svg"
import GoodzoneAppImg from "../../../public/goodzoneAppImg.png";
import Website from "../../../public/internet.svg";
import AdminPanel from "../../../public/adminPanel.svg";
import Crossplatform from "../../../public/phones.svg";
import WebDesign from "../../../public/designComputer.svg";
import MobileDesign from "../../../public/designMobile.svg";
import SmallCards from "../SmallCards/SmallCards";


export default function Goodzone() {
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
    <div className={cls.deleverSection} id="goodzone">
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.wrapperInner} style={{ opacity: '1', transform: 'none' }}>
            <div className={cls.title}>
              <Image src={GoodzoneTitle} alt="goodzone Title" className={cls.brend} />
              <span className={cls.projectType} style={{ backgroundColor: 'rgba(245,0,0,0.2)', color: '#F50000' }}>
                <Image src={Goodzonelogo} alt="goodzone" />
                {'E-Commerce'}
              </span>
            </div>

            <div className={`${cls.wrapperInner} ${cls.innerRespons}`}>
              <div className={cls.imgWrapper}>
                <Image src={GoodzoneAppImg} alt="Goodzone App Image" style={{ opacity: '1', transform: 'none' }} />
              </div>
            </div>

            <p className={cls.description}>
              {'Goodzone - Internet shop of household appliances in Uzbekistan.'}
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
              <Image src={GoodzoneAppImg} alt="Goodzone app image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}