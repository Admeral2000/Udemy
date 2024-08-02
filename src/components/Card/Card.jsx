import Image from 'next/image';
import classNames from 'classnames';
import cls from './Card.module.css';

const Card = ({ image, text, alt, cardClass, imageClass, textClass }) => {
  return (
    <div className={classNames(cls.card, cardClass)}>
      <Image src={image} alt={alt} className={classNames(cls.image, imageClass)} />
      <p className={classNames(cls.text, textClass)}>{text}</p>
    </div>
  );
};

export default Card;