import React from 'react';

function Order({companyName,clientName, idOrder, orderTitle, orderResume, location}) {
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
