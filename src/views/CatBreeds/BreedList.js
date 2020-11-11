/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable block-spacing */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prop-types */
import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import './breedList.scss';
function BreedList({breeds, onElementScroll, handleClick}) {
    return (
        <div className="breed-list">
        <div>
    <List className="list"  onScroll={onElementScroll}  >
        {breeds.map((breed) => (
        <ListItem className="item-list" onClick={() => {handleClick(breed)}} >
                
                <ListItemText className="item-elements"
                key ={breed}>
                    
                    <PetsIcon />
                    <p>Name - {breed.name}</p>
                    <p>Origin - {breed.origin}</p>
                    <p>Temperament - {breed.temperament}</p>
                    // eslint-disable-next-line react/jsx-one-expression-per-line
                    <p>Social needs - {breed.social_needs}</p>
                </ListItemText> 
            </ListItem>
            ))}
            
    </List>
        
    </div>
    </div>
    )
}

export default BreedList;
