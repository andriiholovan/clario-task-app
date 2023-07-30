import React from 'react';
import { useIntersection } from '../../hooks';

import css from './style.module.scss'

type FeatureAdvantage = {
  icon: string;
  description: string;
};

type FeatureProps = {
  background: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  advantageList: FeatureAdvantage[];
};

const Feature: React.FC<FeatureProps> = ({
  image,
  background,
  alt,
  title,
  description,
  advantageList,
}) => {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(triggerRef);

  React.useEffect(() => {
    if (isVisible) {
      console.log('Is Shown Feature:', title);
    }
  }, [isVisible]);

  return (
    <>
      <div
        className={css.image_container}
        ref={triggerRef}
        style={{ background }}
      >
        <img className={css.image} src={image} alt={alt} />
      </div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.description}>{description}</p>
      <div className={css.item_container}>
        {advantageList.map(advantage=> (
          <div key={advantage.description} className={css.item_wrapper}>
            <img src={advantage.icon} alt={advantage.description}/>
            <p className={css.item_description}>{advantage.description}</p>
          </div>
        ))}
      </div>
    </>
  )
};

export default Feature;
