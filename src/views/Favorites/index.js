/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import PictureText from 'src/components/PictureText';
import Favourite from 'src/components/Favourite';
import Image from 'src/components/Image';
import Feed from 'src/components/Feed';
import { makeStyles } from '@material-ui/styles';
import './index.scss';

import axios from 'axios';

function Favorites() {
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };
  const user = 'my-user-1234';

  const [favorites, setFavorites] = useState([
    {
      idImage: '',
      idFav: 0,
      urlImage: ''
    }]);
  const favImages = [];
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/favourites?limit=50', { headers: header })
      .then((res) => {
        console.log(res.data);
        res.data.forEach((element) => {
          if (element.image_id !== 'undefined') {
            // const idImage = element.image_id;
            // const idFav = element.id;
            // const urlImage = element.image.url;
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
      {console.log(favorites)}


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
            isFavActive//cambiar la condicion para cambiar el estilo de la imagen
            onClick={()=> { handleClick(item.idFav);}}


            index={item}
           
          />
        </div>
        // works


        // <div key={favorite}>
        //   <p>{item.idImage}</p>
        //   <p>{item.idFav}</p>
        //   <Image src={item.urlImage} altText="cat image" />
        //   <Favourite />
        // </div>

        // <PictureText key={favorite} url={item.urlImage}>
        //   <Favourite />
        // </PictureText>


      ))}


    </div>
  );
}

export default Favorites;
