import React from 'react';
import { MainButton, MainTitle } from '../common';
import { useScroll } from '../../context/ScrollProvider';

import css from './style.module.scss'

const ReminderSection = () => {
  const { handleScroll } = useScroll();
  return (
    <section>
      <div className={css.container}>
        <MainTitle as="h2" />
        <MainButton handleClick={handleScroll} />
      </div>
    </section>
  );
};

export default ReminderSection;
