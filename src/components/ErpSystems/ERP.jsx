import cls from './ERP.module.css';
import Card from '../SmallCards/SmallCards';
import House from '@/../public/erp_systems_home.svg';
import Mail from '../../../public/erp_systems_mail.svg';
import Note from '../../../public/erp_systems_note.svg';
import ECommerce from '../../../public/erp_systems_ship.svg';
import Learning from '../../../public/erp_systems_cap.svg';
import Apply from '../../../public/erpSystemsApply.svg';
import BgPattern from '../../../public/erp_systems_bg.png';
import ERPsystem from '../../../public/erp_systems_laptop.png';
import InfoImg from '@/components/serviceInfoImage/InfoImage';


export default function ERP() {
  const cardItems = [
    {
      text: 'CRM',
      image: Apply,
      alt: 'CRM',
    },
    {
      text: 'eLearning',
      image: Learning,
      alt: 'eLearning',
    },
    {
      text: 'E-Commerce',
      image: ECommerce,
      alt: 'E-Commerce',
    },
    {
      text: 'POS',
      image: Note,
      alt: 'POS',
    },
    {
      text: 'Sms / Email',
      image: Mail,
      alt: 'Sms / Email',
    },
    {
      text: 'Warehouse',
      image: House,
      alt: 'Warehouse',
    },
  ]
  return (
    <div className={cls.serviceSection} id='erp'>
      <div className="container">
        <h2 className="title">ERP systems</h2>
        <div className={cls.serviceSectionWrapper}>
          <InfoImg
            srcBg={BgPattern}
            altBg='Background pattern'
            src={ERPsystem}
            alt='ERP systems'
          />

          <div className={cls.serviceSectionInner}>
            <p className={cls.serviceSectionText}>IT Systems of any level of complexity at a convenient time for you</p>
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