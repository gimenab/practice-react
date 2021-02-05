import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  IconButton,
  Tooltip,
  colors
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FilterNone, Image, NoEncryption } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {
    paddingLeft: '20px',
  },
  likedButton: {
    color: colors.red[600],
    paddingLeft: '20px',
  },
  removeImg: {
    display: 'none'
  }

}));

function Favourite({
  className, id, user, favorites, isFavActive, idImage, ...rest
}) {
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };
  const data = {
    image_id: `${id}`,
    sub_id: `${user}`,
  };
  const classes = useStyles();
  // const [isPostSaveAsFavorite, setIsPostSaveAsFavorite] = useState();

  const [idFavorite, setIdFavorite] = useState();


  // useEffect(() => {
  //   axios.get('https://api.thecatapi.com/v1/favourites', { headers: header })
  //     .then((res) => {
  //       // console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const addFavoritePost = () => {
    axios.post('https://api.thecatapi.com/v1/favourites', data, { headers: header })
      .then((res) => {
        // console.log(res.data);
        setIdFavorite(res.data.id);
        isFavActive(true);
        // setIsPostSaveAsFavorite(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const deleteFavouritePost = () => {
    axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`, { headers: header })
      .then((res) => {
        console.log(res.data);
    
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      {isFavActive ? (
        <Tooltip title="remove">
          <IconButton
            className={classes.likedButton}
            size="small"
            onClick={deleteFavouritePost}

          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="add">
          <IconButton
            className={classes.likeButton}
            size="small"
            onClick={addFavoritePost}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      )}

    </div>
  );
}

export default Favourite;
