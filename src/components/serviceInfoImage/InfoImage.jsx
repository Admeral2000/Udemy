import Image from 'next/image';
import classNames from 'classnames';
import cls from './InfoImage.module.css';

const InfoImage = ({ srcBg, altBg, src, alt, serviceSectionInnerClass, imageClass, imgWrapperClass, bgImageClass }) => {
  return (
    <div className={classNames(cls.serviceSectionInner, serviceSectionInnerClass)}>
      <div className={classNames(cls.imgWrapper, imgWrapperClass)}>
        <Image className={classNames(cls.bgImage, bgImageClass)} src={srcBg} alt={altBg} />
        <Image className={classNames(cls.image, imageClass)} src={src} alt={alt} />
      </div>
    </div>
  );
};

export default InfoImage;