import React, { Fragment } from 'react';

import css from './style.module.scss'

type Step = {
  title: string;
  description?: string;
};

const STEPS: Step[] = [
  { title: 'Install Clario' },
  { title: 'Set up your protection' },
  { title: 'Enjoy spy-free life', description: 'Relax and let Clario do the job.' }
];

const HowToSection = () => {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>
          <span className={css.title_lineStart}>
            All you need to do
            <br /> is&nbsp;
          </span>
          <span className={css.title_lineEnd}>3 easy steps.</span>
        </h2>
        <div>
          {STEPS.map((step, index) => (
            <Fragment key={step.title}>
              <div className={css.step_container}>
                <div className={css.step_number}>
                  {index + 1}
                  <hr />
                </div>
                <div>
                  <p className={css.step_title}>{step.title}</p>
                  {step.description && <p className={css.step_description}>{step.description}</p>}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
