import React from 'react';
import './index.scss';


function PageTitle(props) {
  return (
    <div>
      <h3 className="page-title">{props.name}</h3>
    </div>
  );
}

export default PageTitle;
