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
import DetailsBox2 from 'src/components/DetailsBox2/index';


function Breed() {
  const [breed, setBreed] = useState([]);
  const { id } = useParams('');
  const history = useHistory('');
  const [image, setImage] = useState([]);
  const [details, setDetails] = useState([{}]); // current + DetailBox2
  const [boxDetail1, setBoxDetail1] = useState([
    {
      title: 'Temperament',
      text: '',
    },
  ]);
  const [boxDetail2, setBoxDetail2] = useState([
    {
      title: '',
      text: ''
    },
    {
      title: '',
      text: ''
    },
    {
      title: '',
      text: ''
    },
  ])
  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds/${id}`)
      .then((res) => {
        setBreed(res.data);
        console.log(res.data);
        showBreedImage(id);
        setBoxDetail1(
          [
            {
              title: 'Description',
              text: res.data.description,
            },
            {
              title: 'Temperament',
              text: res.data.temperament,
            },
          ]
        )
        console.log(boxDetail1);
        setBoxDetail2(
          [
            {
              title: 'Temperament',
              text: res.data.temperament
            },
            {
              title: 'Life Span',
              text: res.data.life_span
            },
            {
              title: 'Origin',
              text: res.data.origin
            },
          ]
        )
        setDetails([
          {
            title: 'Temperament',
            text: res.data.temperament
          },
          {
            title: 'Life Span',
            text: res.data.life_span
          },
          {
            title: 'Origin',
            text: res.data.origin
          },
        ])
        console.log(details);
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
        <Detail title={boxDetail1[0].title} text={boxDetail1[0].text} />
      </DetailsBox>
      {/* <DetailsBox>
        <Detail title="Temperament" text={breed.temperament} />
        <Detail title="Life Span" text={breed.life_span}>
          <FavoriteBorderIcon className="detail-icon" />
        </Detail>
        <Detail title="Origin" text={breed.origin}>
          <PublicIcon className="detail-icon" />
        </Detail>
      </DetailsBox> */}
      {/*  2º DetailsBox con  Detail con props.children */}

      {/* <Paper className="testPaper paper flex-container" elevation={3}>
        <Detail title={boxDetail2[0].title} text={boxDetail2[0].text} />
        <Detail title={boxDetail2[1].title} text={boxDetail2[1].text} />
        <Detail title={boxDetail2[2].title} text={boxDetail2[2].text} />
      </Paper> */}
       {/* 3º sin detail box */}

         {/* <Paper className="testPaper paper flex-container" elevation={3}>
        {boxDetail2.map((index) => (
          <Detail id="test" key={index}>
            <h3>{index.title}</h3>
            <p className="detail-text">{index.text}</p>
          </Detail>
        ))}
         </Paper> */}
        {/* <DetailsBox className="paper flex-container" elevation={3}>
          {boxDetail2.map((index) => (
            <Detail key={index}>
              <h3>{index.title}</h3>
              <p className="detail-text">{index.text}</p>
            </Detail>
          ))}
        </DetailsBox> */}

      <DetailsBox2 details={details} />
        {/* 1º sin props children  */}

      <DetailsBox>
        <Detail title="Child Friendly" text={breed.child_friendly}>
          <ChildFriendlyIcon className="detail-icon" />
        </Detail>
        <Detail title="Dog Friendly" text={breed.dog_friendly}>
          <PetsIcon className="detail-icon" />
        </Detail>
        <Detail title="Social Needs" text={breed.social_needs}>
          <EmojiPeopleIcon className="detail-icon" />
        </Detail>
        <Detail title="Afection Level" text={breed.affection_level}>
          <FavoriteIcon className="detail-icon" />
        </Detail>
      </DetailsBox>
    </div>
  );
}

export default Breed;
