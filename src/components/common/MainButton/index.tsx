import React from 'react';
import Button from '../Button';

import css from './style.module.scss';

const MainButton = () => (
  <Button className={css.button_main} >
      Protect me now
  </Button>
);

export default MainButton;
