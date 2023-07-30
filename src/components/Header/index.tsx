import React from 'react';
import { Button } from '../common';
import { ClarioLogo } from '../../assets/svg';
import { debounce } from '../../helpers';

import css from './style.module.scss'

const CTA_BUTTON_OFFSET: number = 380;

const Header = () => {
  const ref = React.useRef<HTMLImageElement>(null);
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    const callback = debounce(() => {
      setIsSticky(window.scrollY > CTA_BUTTON_OFFSET);
    });
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, []);

  return (
    <header className={`${css.header} ${isSticky ? css.header_isSticky : ''}`}>
      <div className={css.header_container}>
        <div className={css.header_logo}>
          <img ref={ref} src={ClarioLogo} alt="Clario header logo"/>
        </div>
        {isSticky && (
          <Button className={css.header_button} >
            Protect me now
          </Button>
        )}
      </div>
    </header>
  )
};

export default Header;
