import React from 'react';

const UiBtn = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`ui-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default UiBtn;
