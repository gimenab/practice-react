import React from 'react';

import './index.scss';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';


function Order({logo, companyName,clientName, idOrder, orderTitle, orderResume, location}) {


    return (
        <div>
            <h1>{companyName}</h1>
            <h3>{clientName} requested a quote</h3>
            <p>{idOrder}</p>
            <p>{location}</p><br/>
            <p>{orderTitle}</p>
            <p>{orderResume}</p>
           
          
        </div>
    )
}

export default Order;
