import cls from './Services.module.css';
import Card from '../Card/Card';
import People from '@/../public/person-logo.svg';
import Phone from '@/../public/phone.svg';
import PointTree from '@/../public/points-tree.svg';
import Layer from '@/../public/square-layer.svg';
import Set from '@/../public/settings.svg';
import Desktop from '@/../public/computer.svg';

export default function Services() {
  const services = [
    {
      text: 'Team',
      image: People,
      alt: 'Group icon',
    },
    {
      text: 'Development of mobile applications',
      image: Phone,
      alt: 'Mobile application',
    },
    {
      text: 'Development and implementation ERP systems',
      image: PointTree,
      alt: 'Development systems',
    },
    {
      text: 'User interface, User experience design',
      image: Layer,
      alt: 'User interface, User experience design',
    },
    {
      text: 'Optimization IT consulting infrastructure',
      image: Set,
      alt: 'Optimization IT consulting infrastructure',
    },
    {
      text: 'IT consulting',
      image: Desktop,
      alt: 'IT consulting',
    },

  ];
  return (
    <div className={cls.ServiceSection} id="directs">
      <div className='container'>
        <h2 className='title'>Our services</h2>
        <div className={cls.serviceWrapper}>
          {services.map((item, index) => (
            <Card
              key={index}
              text={item.text}
              image={item.image}
              alt={item.alt}
              cardClass={cls.customCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

