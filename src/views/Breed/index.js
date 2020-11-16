/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublicIcon from '@material-ui/icons/Public';
import PetsIcon from '@material-ui/icons/Pets';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Detail from 'src/components/DetailsBox/Detail';
import PageTitle from 'src/components/PageTitle';
import './index.scss';
import DetailsBox from 'src/components/DetailsBox/index';


function Breed(props) {
  const [breed, setBreed] = useState([]);
  const { id } = useParams('');
  const history = useHistory('');
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((res) => {
        setBreed(res.data);
        console.log(res.data);
        showBreedImage(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    history.goBack();
  };

  const showBreedImage = (id) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
      .then((res) => {
        setImage(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid">
      <Button className="link-button"
        onClick={() => { handleClick(); }}
        variant="contained"
        color="primary"
      >
        Back to Breeds
      </Button>
      <PageTitle name={breed.name} />
      <DetailsBox>
        <Detail><img className="detail-image" src={image.url} alt={breed.name} /></Detail>
        <Detail title="Description" text={breed.description} />
      </DetailsBox>
      <DetailsBox>
        <Detail title="Temperament" text={breed.temperament} />
        <Detail title="Life Span" text={breed.life_span}>
          <FavoriteBorderIcon />
        </Detail>
        <Detail title="Origin" text={breed.origin}>
          <PublicIcon />
        </Detail>
      </DetailsBox>
      <DetailsBox>
        <Detail title="Child Friendly" text={breed.child_friendly}><ChildFriendlyIcon /></Detail>
        <Detail title="Dog Friendly" text={breed.dog_friendly}><PetsIcon /></Detail>
        <Detail title="Social Needs" text={breed.social_needs}><EmojiPeopleIcon /></Detail>
        <Detail title="Afection Level" text={breed.affection_level}><FavoriteIcon /></Detail>
      </DetailsBox>
    </div>
  );
}

export default Breed;
