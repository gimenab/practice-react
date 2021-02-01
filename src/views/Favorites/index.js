import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';
import Favourite from 'src/components/Favourite';
import Feed from 'src/components/Feed';
import axios from 'axios';

function Favorites() {
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };
  const [favorites, setFavorites] = useState([
    {
      idImage: '',
      idFav: '',
      urlImage: ''
    }]);


  const images = [];

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/favourites?limit=100', { headers: header })
      .then((res) => {
        console.log(res.data);
        res.data.forEach((element) => {
          if (element.image_id !== 'undefined') {
            setUrlOfFavorite(element.image_id);
            setFavorites({
              idImage: `${element.image_id}`,
              idFav: `${element.id}`,
            });
          }
          console.log(images);
        });
        // identifiers.filter((identifier,) => identifier !== 'undefined').map((identifier) => {
        //   getDataOfFavorites(identifier);
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setUrlOfFavorite = async (identifier) => {
    try {
      const res = await axios.get(`https://api.thecatapi.com/v1/images/${identifier}`, { headers: header });
      const { url } = res.data;
      images.push(url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {console.log(favorites)}
      <Header><PageTitle name="All Cats" /></Header>
      <Feed>
        <Favourite
          array={favorites}
          className=""
          id=""
          user="user_1234"
        />
      </Feed>


    </div>
  );
}

export default Favorites;
