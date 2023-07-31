import React from 'react';
import { Slider } from '../common'

import css from './style.module.scss'

const ReviewsSection = () => {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>
            Let’s hear what real Clario users say.
        </h2>
        <Slider />
      </div>
    </section>
  );
};

export default ReviewsSection;
