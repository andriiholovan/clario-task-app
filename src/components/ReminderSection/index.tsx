import React from 'react';
import { MainButton, MainTitle } from '../common';

import css from './style.module.scss'

const ReminderSection = () => {
  return (
    <section>
      <div className={css.container}>
        <MainTitle as="h2" />
        <MainButton />
      </div>
    </section>
  );
};

export default ReminderSection;
