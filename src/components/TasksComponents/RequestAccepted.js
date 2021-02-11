import React from 'react'
import { Button } from '@material-ui/core';



function RequestAccepted({clientName, email,phone,address}) {
    return (
        <div className="section">
            <Button 
                className="link-button"
                variant="outlined"
                size="large">
                CALL NOW
            </Button>
            <Button
                className="link-button"
                variant="contained"
                color="primary"
                size="large">
                SCHEDULLE NOW
            </Button>
            <h4>Request Details</h4>
            <p>{clientName}</p>
            <p>{email}</p>
            <p>{phone}</p><br />
            <h4>{address}</h4>
                    
        </div>
    )
}

export default RequestAccepted;
