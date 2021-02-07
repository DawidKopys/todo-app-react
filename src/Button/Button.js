import React from 'react';
import './_Button.scss';

const Button = ({ className, id, title, text, onClick }) => {
  return (
    <button
      className={className}
      id={id}
      title={title}
      tabIndex='0'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
