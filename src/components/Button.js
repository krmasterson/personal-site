import React from 'react';
import '../style/Button.css';

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  ButtonSize
}) => {

  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
    )
}

export default Button
