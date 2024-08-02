import Image from "next/image";
import cls from '../MobileApp/MobileApp.module.css';
import style from './Consulting.module.css';
import Card from '../SmallCards/SmallCards';
import Frontend from '@/../public/frontend.svg';
import Backend from '../../../public/backend.svg';
import Architecture from '../../../public/architecture.svg';
import DevOps from '../../../public/infinity.svg';
import UXUI from '../../../public/uiux.svg';
import QA from '../../../public/qA.svg';
import Consulting from '../../../public/consulting.svg';

export default function MobileApp() {

  const services = [
    {
      text: 'Frontend',
      image: Frontend,
      alt: 'Frontend',
    },
    {
      text: 'Backend',
      image: Backend,
      alt: 'Backend',
    },
    {
      text: 'Architecture',
      image: Architecture,
      alt: 'Architecture',
    },
    {
      text: 'DevOps',
      image: DevOps,
      alt: 'DevOps',
    },
    {
      text: 'UX/UI',
      image: UXUI,
      alt: 'UX/UI',
    },
    {
      text: 'QA',
      image: QA,
      alt: 'QA',
    },
  ];

  return (
    <div className={cls.serviceSection} id='consulting'>
      <div className="container">
        <h2 className="title">IT consulting</h2>
        <div className={cls.serviceSectionWrapper}>
          <div className={cls.serviceSectionInner}>
            <p className={cls.serviceSectionText}>We can improve the qualifications of your employees thereby increasing the efficiency of your company</p>
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
          </div>
          <div className={cls.serviceSectionInner}>
            <div>
              <Image className={style.consultImg} src={Consulting} alt='Consulting' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}