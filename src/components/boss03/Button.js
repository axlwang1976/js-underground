import React from 'react';

import './Button.scss';

const Button = props => (
  <div
    className="button"
    data-value={props.value}
    data-size={props.size}
    data-label={props.label}
    onClick={props.onClick}
  >
    {props.label}
  </div>
);

export default Button;
