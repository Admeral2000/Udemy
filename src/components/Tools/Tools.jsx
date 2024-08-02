import React, { useState } from 'react';
import StyledCheckboxGroup from './Radio/Radio';
import Image from "next/image";
import cls from './Tools.module.css';
import classNames from 'classnames';
import cardItems from '../Data/ToolsData';

export default function Tools() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectedValueChange = (value) => {
    setSelectedValue(value);
  };

  const getMappedId = (value) => {
    if (value === 'UX/UI') {
      return 'UI';
    }
    return value;
  };

  return (
    <div className={cls.toolsSection} id="tools">
      <div className="container">
        <h2 className="title">Tools</h2>
        <StyledCheckboxGroup onSelectedValueChange={handleSelectedValueChange} />
        <div className={cls.techContainer}>
          {cardItems?.map((item) => {
            const isSelected = !selectedValue || getMappedId(selectedValue) === item.id;
            return (
              <div
                key={item.id}
                className={classNames(
                  cls.techItem,
                  { [cls[item.className]]: isSelected, [cls[item.classNameType]]: isSelected }
                )}
              >
                <Image src={item.image} alt={item.alt} width={24} height={24} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

