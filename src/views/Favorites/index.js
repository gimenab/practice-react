/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import Favourite from 'src/components/Favourite'
import './index.scss';

import axios from 'axios';

function Favorites() {
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };
  const user = 'my-user-1234';

  const [favorites, setFavorites] = useState([{}]);
  const favImages = [];
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/favourites?limit=50', { headers: header })
      .then((res) => {
        console.log(res.data);
        res.data.forEach((element) => {
          if (element.image_id !== 'undefined') {
            const fav = {
              idImage: element.image_id,
              idFav: element.id,
              urlImage: element.image.url
            };
            favImages.push(fav);
          }
        });
        setFavorites(favImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (event) => {
    const favToRemove =(event);
    const array = favorites.filter((favorite => favorite.idFav !== favToRemove))
    setFavorites(array);
  }

  return (
    <div className="container">
      <Header><PageTitle name="All Cats" /></Header>

      {favorites.map((item, favorite) => (
        <div key={favorite} className="fav">
          <img
            className="picture"
            src={item.urlImage}
            alt="cat favorite"
          />
          <Favourite
            id={item.idFav}
            user={user}
            isFavActive
            onClick={()=> { handleClick(item.idFav);}}
            index={item}
          />
        </div>
       ))}
    </div>
  );
}

export default Favorites;
