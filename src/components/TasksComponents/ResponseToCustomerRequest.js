import React from 'react';
import { Button } from '@material-ui/core';
import './index.scss';


function ResponseToCustomerRequest({companyName, clientName, idOrder, orderTitle,idRequest, location,orderResume, handleClick} ) {
    return (
        <div className="section">
            <h1>{companyName}</h1>
            <h3>{clientName} requested a quote</h3>
            <p>{idOrder}</p>
            <p>{location}</p><br/>
            <p>{orderTitle}</p>
            <p>{orderResume}</p>
            
            <h3>Please accept or decline to quote</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>

            <Button 
                className="link-button"
                variant="outlined"
                size="large">
                Decline
            </Button>
            <Button
                className="link-button"
                variant="contained"
                color="primary"
                size="large"
                onClick={() => { handleClick(idRequest); }}
               >
                Accept
            </Button>
        </div>
    )
}

export default ResponseToCustomerRequest;
