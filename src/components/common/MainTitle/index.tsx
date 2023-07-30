import React, { HTMLAttributes } from 'react';

import css from './style.module.scss';

interface MainTitleProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: React.ElementType;
}

const MainTitle: React.FC<MainTitleProps> = ({ as: Tag }) => {
  const Component = Tag ?? 'h1';
  return (
    <Component className={css.heading_lineStart}>
      Stop your &nbsp;
      <span className={css.heading_lineEnd}>
        phone from being spied on
      </span>
    </Component>
  )
}
export default MainTitle;
