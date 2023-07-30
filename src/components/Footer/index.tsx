import React from 'react';
import { ClarioLogo } from '../../assets/svg';

import css from './style.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={css.footer_container}>
        <div className={css.footer_logo}>
          <img src={ClarioLogo} alt="Clario footer logo"/>
        </div>
        <p className={css.footer_company}>
          © 2023 Clario Tech DMCC
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
