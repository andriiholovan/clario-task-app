import React, { ReactNode } from 'react';

import css from './style.module.scss'

type ButtonProps = {
  children: ReactNode
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button className={`${css.button} ${className}`}>
      {children}
    </button>
  )
};

export default Button;
