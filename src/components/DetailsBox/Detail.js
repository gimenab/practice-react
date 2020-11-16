/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import './detail.scss';

function Detail(props) {
  return (
    <div className="detail">
      {props.children}
      <h3>{props.title}</h3>
      <p className="detail-text">{props.text}</p>
    </div>
  );
}

export default Detail;
