/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import './detail.scss';

function Detail({ title, text, children }) {
  return (
    <div className="detail">
      {children}
      <h3>{title}</h3>
      <p className="detail-text">{text}</p>
    </div>
  );
}

export default Detail;
