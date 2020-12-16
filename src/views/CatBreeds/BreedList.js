
import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import './breedList.scss';

// eslint-disable-next-line react/prop-types
function BreedList({ breeds, onElementScroll, handleClick }) {
  return (
    <div className="breed-list">
      <div>
        <List className="list" onScroll={onElementScroll}>
          {breeds.map((breed) => (
            <ListItem className="item-list" onClick={() => { handleClick(breed); }}>

              <ListItemText
                className="item-elements"
                key={breed}
              >

                <PetsIcon />
                <p>
Name -
                  {breed.name}
                </p>
                <p>
Origin -
                  {breed.origin}
                </p>
                <p>
Temperament -
                  {breed.temperament}
                </p>
                <p>
Social needs -
                  {breed.social_needs}
                </p>
              </ListItemText>
            </ListItem>
          ))}

        </List>

      </div>
    </div>
  );
}

export default BreedList;
