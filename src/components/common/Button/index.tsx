import React from 'react';

import css from './style.module.scss'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  handleClick = () => {},
}) => {
  return (
    <button
      className={`${css.button} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default Button;
