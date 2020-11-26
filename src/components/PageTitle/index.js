import React from 'react';
import './index.scss';


function PageTitle(props) {
  return (
    <div>
      <h2 className="page-title">{props.name}</h2>
    </div>
  );
}

export default PageTitle;
