import cls from '../ErpSystems/ERP.module.css';
import Card from '../SmallCards/SmallCards';
import Cloud from '@/../public/cloud.svg';
import CICD from '../../../public/CICD.svg';
import Devops from '../../../public/infinity.svg';
import LoadTesting from '../../../public/thunder.svg';
import StressTesting from '../../../public/thunder.svg';
import AutoTesting from '../../../public/autoTesting.svg';
import Architecture from '../../../public/architecture.svg';
import BgPattern from '../../../public/erp_systems_bg.png';
import ERPsystem from '../../../public/erp_systems_laptop.png';
import InfoImg from '@/components/serviceInfoImage/InfoImage';


export default function Optimization() {
  const cardItems = [
    {
      text: 'Architecture',
      image: Architecture,
      alt: 'Architecture',
    },
    {
      text: 'Auto testing',
      image: AutoTesting,
      alt: 'Auto testing',
    },
    {
      text: 'Stress testing',
      image: StressTesting,
      alt: 'Stress testing',
    },
    {
      text: 'Load testing',
      image: LoadTesting,
      alt: 'Load testing',
    },
    {
      text: 'Devops',
      image: Devops,
      alt: 'Devops',
    },
    {
      text: 'Cloud',
      image: Cloud,
      alt: 'Cloud',
    },
    {
      text: 'CI / CD',
      image: CICD,
      alt: 'CI / CD',
    },
  ]
  return (
    <div className={cls.serviceSection} id='optimization'>
      <div className="container">
        <h2 className="title">Optimization Infrastructure</h2>
        <div className={cls.serviceSectionWrapper}>
          <InfoImg
            srcBg={BgPattern}
            altBg='Background pattern'
            src={ERPsystem}
            alt='ERP systems'
          />

          <div className={cls.serviceSectionInner}>
            <p className={cls.serviceSectionText}>Our experienced professionals will help you optimize your infrastructure</p>
            <div className={cls.iconWrapper}>
              {cardItems.map((item, index) => (
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
        </div>
      </div>
    </div>
  )
}