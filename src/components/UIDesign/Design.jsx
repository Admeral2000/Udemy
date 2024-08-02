import Image from "next/image";
import cls from '../MobileApp/MobileApp.module.css';
import style from './Design.module.css';
import Card from '../SmallCards/SmallCards';
import Prototyping from '@/../public/designPrototyping.svg';
import Paint from '../../../public/designPaint.svg';
import Tree from '../../../public/designLayer.svg';
import MobileDesign from '../../../public/designMobile.svg';
import WebDesign from '../../../public/designComputer.svg';
import AtomicDesign from '../../../public/designReact.svg';
import Figma from '../../../public/figma.svg';
import Sketch from '../../../public/sketch.svg';
import Lottie from '../../../public/lottie.svg';
import Illustrator from '../../../public/illustrator.svg';
import BgPattern from '../../../public/mobille_app_bg_pattern.png';
import DesignPhones from '../../../public/designPhones.png';
import InfoImg from '@/components/serviceInfoImage/InfoImage';


export default function MobileApp() {
  const designItems = [
    {
      text: 'UX',
      image: Tree,
      alt: 'UX',
    },
    {
      text: 'UI',
      image: Paint,
      alt: 'UI',
    },
    {
      text: 'Prototyping',
      image: Prototyping,
      alt: 'Prototyping',
    },

    {
      text: 'Mobile Design',
      image: MobileDesign,
      alt: 'Mobile Design',
    },
    {
      text: 'Web Design',
      image: WebDesign,
      alt: 'Web Design',
    },
    {
      text: 'Atomic Design',
      image: AtomicDesign,
      alt: 'Atomic Design',
    },
  ];
  const techItems = [
    {
      text: 'Figma',
      src: Figma,
      alt: 'Figma',
    },
    {
      text: 'Sketch',
      src: Sketch,
      alt: 'Sketch',
    },
    {
      text: 'Lottie',
      src: Lottie,
      alt: 'Lottie',
    },
    {
      text: 'Illustrator',
      src: Illustrator,
      alt: 'Illustrator',
    },
  ];
  return (
    <div className={cls.serviceSection} id='design'>
      <div className="container">
        <h2 className="title">UI / UX design</h2>
        <div className={cls.serviceSectionWrapper}>
          <div className={cls.serviceSectionInner}>
            <p className={cls.serviceSectionText}>Our company takes a human-centered approach to design</p>
            <div className={cls.serviceSectionIconsWrapper}>
              {designItems.map((item, index) => (
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
                  <div key={index} className={`${cls.serviceSectionTech}  ${style.techExtra}`}>
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
            src={DesignPhones}
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