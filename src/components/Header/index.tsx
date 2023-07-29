import React from 'react';
import css from './style.module.scss'
import { ClarioLogo } from "../../assets/svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__logo}>
        <img src={ClarioLogo} alt="Clario header logo"/>
      </div>
    </header>
  )
};

export default Header;
