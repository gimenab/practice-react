import React, { useState } from 'react';
import { useHistory } from 'react-router';
import InfoRequestAccepted from 'src/components/TasksComponents/InfoRequestAccepted';
import InfoRequest from 'src/components/TasksComponents/InfoRequest';
import './index.scss';
import ResponseToCustomerRequest from 'src/components/TasksComponents/ResponseToCustomerRequest';

function Tasks() {
    const order = {
        companyName: 'ABC Junkes Services', 
        clientName: 'John S.',
        idOrder: '562341', 
        orderTitle: 'Ingroud Pool removed', 
        location : 'Massachusset',
        orderResume : 'We have two trailers on the block to of the property that need to be removed',
    }

  const history = useHistory('');
  const [isRequestActive, setIsRequestActive] = useState(false);
  const [ request, setRequest ] = useState({});

  const handleClick = () => {
    const idRequest = (order.idOrder);
    console.log(idRequest, ' !!!');
    history.push(`/handlingorder/${idRequest}`);
  };
  const takeRequest = () => {
      
  }
    return (
        <div className="container">
                <ResponseToCustomerRequest
                    companyName={order.companyName}
                    clientName={order.clientName}
                    idOrder={order.idOrder}
                    orderTitle={order.orderTitle}
                    location ={order.location}
                    orderResume={order.orderResume}
                    handleClick={handleClick}
                />
                <InfoRequest />
            {/* <div className="components">
                <InfoRequest className="section" />
                <InfoRequestAccepted className="section"/>
            </div>       */}
        </div>
    )
}

export default Tasks;
