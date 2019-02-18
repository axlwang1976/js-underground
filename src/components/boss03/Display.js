import React from 'react';

import './Display.scss';

const Display = props => (
  <div className="display">
    <div className="display_calc">{props.calc}</div>
    <div className="display_res">{props.res}</div>
  </div>
);

export default Display;
