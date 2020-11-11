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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router';
import { FaDog } from 'react-icons/fa';
import { CgGirl } from 'react-icons/cg';
import { GrEmoji } from 'react-icons/gr';
import { GiWorld } from 'react-icons/gi';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import './index.scss';


function Breed() {
  const [breed, setBreed] = useState([]);
  const { id } = useParams('');
  const history = useHistory('');
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/breeds/${id}`)
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
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
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
      <p className="title">{breed.name}</p>
      <Button className="link-button" onClick={() => { handleClick() }} variant="contained" color="primary">Back to Breeds</Button>
          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <div className="principal photo">
                <img className="breed-image"
                  src={image.url}
                  alt="Carey Cat"
                />
              </div>
              <div className="principal"><p className="breed-text">{breed.description}</p></div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} className="paper">
              <div className="description">
                <h4>Temperament</h4>
                <p>{breed.temperament}</p>
              </div>
              <div className=" description">
                <GrEmoji className="breed-icon" />
                <h4>Life Span</h4>
                <p className="level">{breed.life_span}</p>
              </div>
              <div className="description">
                <GiWorld className="breed-icon" />
                <h4>Origin</h4>
                <p>{breed.origin}</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paper" elevation={3}>
              <div className="info">
                <CgGirl className="breed-icon" />
                <h4>Child friendly</h4>
                <p className="level">{breed.child_friendly}</p>
              </div>
              <div className="info">
                <FaDog className="breed-icon" />
                <h4>Dog friendly</h4>
                <p className="level">
                  {breed.dog_friendly}
                </p>
              </div>
              <div className="info">
                <FavoriteBorderIcon className="breed-icon" />
                <h4>Affection level</h4>
                <p className="level">{breed.affection_level}</p>
              </div>
              <div className="info">
                <EmojiPeopleIcon className="breed-icon" />
                <h4>Social needs </h4>
                <p className="level">{breed.social_needs}</p>
              </div>
            </Paper>
          </Grid>
    </div>
  );
}

export default Breed;
