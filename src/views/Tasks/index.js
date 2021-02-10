import React from 'react';
import Order from 'src/components/Order';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useParams, useHistory } from 'react-router';
import './index.scss';


function Tasks() {

    const order = {
        logo: 'https://www.abcjunk.com/wp-content/uploads/2020/07/abc-junk-removal-hauling.jpg',
        companyName: 'ABC Junkes Services', 
        clientName: 'John S.',
        idOrder: '562341', 
        orderTitle: 'Ingroud Pool removed', 
        location : 'Massachusset',
        orderResume : 'We have two trailers on the block to of the property that need to be removed',
        phone:'555-123-456',
        email: 'johnSmith@gmail.com',
        address: '2124 Jump st, Grand Rapid, MI 4906'
    }

  const history = useHistory('');
  const handleClick = (event) => {
      const idOrder = (event);
      history.push(`/handlingorder/${idOrder}`);
  };

    return (
        <div className="container">
            <div className="order">
                <div className="order-to-response">
                <Order
                    logo={order.logo}
                    companyName={order.companyName}
                    clientName={order.clientName}
                    idOrder={order.idOrder} 
                    orderTitle={order.title}
                    location={order.location}
                    orderResume={order.orderResume}
                    
                    />
                </div>
                
                <div className="response">
                    <h3>Please accept or decline to quote</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>
                    <div className="button-section">
                        <Button>Decline</Button>
                        <Button
                            className="link-button"
                            variant="contained"
                            color="primary"
                            onClick={() => {handleClick(order.idOrder);}}>
                            Accept
                        </Button>
                    </div>
                
                </div>
            </div>
            
                    <Paper>

                <div className="help-information">
                        <h4>What happnes if I accept?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>

                        <h4> How much does this lead coast?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>

                        <h4>What happnes if I decline?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>

                        </div> 
                    </Paper>
                  
               
        </div>
    )
}

export default Tasks;
