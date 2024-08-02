import Image from "next/image";
import cls from './MobileApp.module.css';
import Card from '../SmallCards/SmallCards';
import Crossplatform from '@/../public/phones.svg';
import Android from '../../../public/android.svg';
import IOS from '../../../public/apple.svg';
import Flutter from '../../../public/flutter.svg';
import Swift from '../../../public/swift.svg';
import Kotlin from '../../../public/kotlin.svg';
import BgPattern from '../../../public/mobille_app_bg_pattern.png';
import MobileDev from '../../../public/mobile_dev_background.png';
import InfoImg from '@/components/serviceInfoImage/InfoImage';


export default function MobileApp() {
  const services = [
    {
      text: 'iOS',
      image: IOS,
      alt: 'Mobile applications-IOS',
    },
    {
      text: 'Android',
      image: Android,
      alt: 'Mobile application-Android',
    },
    {
      text: 'Crossplatform',
      image: Crossplatform,
      alt: 'Development systems-Crossplatform',
    },
  ];
  const techItems = [
    {
      text: 'Swift',
      src: Swift,
      alt: 'Swift',
    },
    {
      text: 'Kotlin',
      src: Kotlin,
      alt: 'Kotlin',
    },
    {
      text: 'Flutter',
      src: Flutter,
      alt: 'Flutter',
    },
  ];
  return (
    <div className={cls.serviceSection} id='mobile'>
      <div className="container">
        <h2 className="title">Development of mobile applications</h2>
        <div className={cls.serviceSectionWrapper}>
          <div className={cls.serviceSectionInner}>
            <p className={cls.serviceSectionText}>In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.</p>
            <div className={cls.serviceSectionIconsWrapper}>
              {services.map((item, index) => (
                <Card
                  key={index}
                  text={item.text}
                  image={item.image}
                  alt={item.alt}
                  cardClass={cls.customCard}
                  imageClass={cls.customImage}
                  textClass={cls.customText}
                />
              ))}
            </div>

            <div className={cls.serviceSectionTechStack}>
              <h3 className={cls.serviceSectionTitle}>Technologies</h3>
              <div className={cls.serviceSectionTechWrapper}>
                {techItems.map((item, index) => (
                  <div key={index} className={cls.serviceSectionTech}>
                    <Image src={item.src} alt={item.alt} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
         
          <InfoImg
            srcBg={BgPattern}
            altBg="Background Image"
            src={MobileDev}
            alt="Main Image"
            serviceSectionInnerClass={cls.customServiceSectionInnerClass}
            imageClass={cls.customImageClass}
            imgWrapperClass={cls.customImgWrapperClass}
            bgImageClass={cls.customBgImageClass}
          />
        </div>
      </div>
    </div>
  )
}