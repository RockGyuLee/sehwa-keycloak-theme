import React from 'react';
import './index.css';

interface Props {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}

function Button({ id, className, style, type, children }: Props) {
  return (
    <button id={id} className={className} style={style} type={type}>
      {children}
    </button>
  );
}

export default Button;
