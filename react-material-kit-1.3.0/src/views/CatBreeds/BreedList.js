import React from 'react';
import { List, ListItemAvatar , ListItem, ListItemText, Avatar} from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import './breedList.scss';
function BreedList({breeds, onElementScroll}) {
    return (
        <div className="breed-list">
        <div>
    <List className="list"  onScroll={onElementScroll}  >
        {breeds.map((breed) => (
        <ListItem className="item-list" >
                
                <ListItemText className="item-elements"
                key ={breed}>
                    
                    <ListItemAvatar><Avatar><PetsIcon /></Avatar></ListItemAvatar>
                    <p>Name - {breed.name}</p>
                    <p>Origin - {breed.origin}</p>
                    <p>Temperament - {breed.temperament}</p>
                    <p>Social needs - {breed.social_needs}</p>
                </ListItemText> 
            </ListItem>
            ))}
            
    </List>
        
    </div>
    </div>
    )
}

export default BreedList
