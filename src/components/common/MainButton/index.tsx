import React from 'react';
import Button from '../Button';

import css from './style.module.scss';

type MainButtonProps = {
  handleClick: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ handleClick }) => (
  <Button className={css.button_main} handleClick={handleClick}>
      Protect me now
  </Button>
);

export default MainButton;
