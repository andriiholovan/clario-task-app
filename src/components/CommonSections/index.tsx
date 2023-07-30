import React from 'react';
import Feature from '../Feature';
import FEATURES from '../Feature/features';
import css from './style.module.scss'

const CommonSections = () => {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>
          Clario helps you easily avoid spying.
        </h2>
        {FEATURES.map(feature => (
          <Feature
            key={feature.id}
            background={feature.background}
            image={feature.image}
            alt={feature.alt}
            title={feature.title}
            description={feature.description}
            advantageList={feature.advantageList}
          />
        ))}
      </div>
    </section>
  );
};

export default CommonSections;
