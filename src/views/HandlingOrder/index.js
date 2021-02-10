import React from 'react';
import { useParams, useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import './index.scss';

function HandligOrder(order) {
  const { idOrder } = useParams('');
  const history = useHistory('');


    return (
        <div className="container">
             <h2>Request Acepted</h2>
            <Paper>
             <div className="help-information">
                <h3>Request Acepted</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>

                <h3>Next, Schedule the quote</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed nunc lorem, ultricies sed dui in, tempor commodo lectus. Morbi ut.</p>
                </div>
                </Paper>
               <div className="order"></div> 
               <div className="button-section">
                    <Button className="link-button">CALL NOW</Button>
                    <Button
                        className="link-button"
                        variant="contained"
                        color="primary">
                        SCHEDULLE NOW
                    </Button>
                </div>
                <div>
                    <h4>Request Details</h4>
                    <p>{order.clientName}John Smith</p>
                    <p>{order.email}johnSmith@gmail.com</p>
                    <p>{order.phone}555-123-456</p><br />
                    <h4>{order.address}2124 Jump st, Grand Rapid, MI 4906</h4>

                </div>
            
        


            
        </div>
    )
}

export default HandligOrder;
