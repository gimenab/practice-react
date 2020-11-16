import React from 'react';
import './index.scss';


function PageTitle(props) {
    return (
        <div>
            <h1 className="page-title">{props.name}</h1>
        </div>
    )
}

export default PageTitle;
