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
      <p>{children}</p>
    </button>
    )
}

export default Button
