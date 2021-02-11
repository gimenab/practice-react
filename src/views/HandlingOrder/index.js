import React from 'react';
import { useParams, useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import './index.scss';
import InfoRequestAccepted from '../../components/TasksComponents/InfoRequestAccepted';
import RequestAccepted from 'src/components/TasksComponents/RequestAccepted';

function HandligOrder() {
  const { idOrder } = useParams('');
  const history = useHistory('');
  const order = {
      address:'2124 Jump st, Grand Rapid, MI 4906',
      email:'johnSmith@gmail.com',
      phone:'555-123-456',
      clientName: 'John Smith',
      idOrder: idOrder

  }
    return (
        <div className="container">
             <InfoRequestAccepted />
             <RequestAccepted 
                  clienteName= {order.clientName}
                  email={order.email}
                  phone={order.phone}
                  address={order.address}
             />  
        </div>
    )
}

export default HandligOrder;
