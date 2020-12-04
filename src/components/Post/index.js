import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  IconButton,
  Tooltip,
  colors
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import './index.scss';
// https://api.thecatapi.com/v1/votes.


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  likeButton: {},
  likedButton: {
    color: colors.red[600],

  },
  unlikeButton: {},
  unlikedButton: {
    color: colors.grey[600],
  }
}));

function Post({ url, className, ...rest }) {
  const classes = useStyles();

  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [likes, setLikes] = useState(false);
  // const [votes, setVotes] = useState();

  // useEffect(() => {
  //   axios.get('https://api.thecatapi.com/v1/votes/${id}')
  //     .then((res) => {
  //       console.log(res);
  //       // setVotes(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const handleLike = () => {
    setUnliked(false);
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };
  const handleUnlike = () => {
    setLiked(false);
    setUnliked(true);
    setLikes((prevLikes) => prevLikes - 1);
  };

  return (
    <div className="post">
      <img className="picture" src={url} alt="cat for vote" />
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        {liked ? (
          <IconButton
            className={classes.likedButton}
            size="large"
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <Tooltip title="Like">
            <IconButton
              className={classes.likeButton}
              onClick={handleLike}
              size="large"
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        )}
        { unliked ? (
          <IconButton
            className={classes.unLikeButton}
            size="large"
          >
            <ThumbDownRoundedIcon />
          </IconButton>
        ) : (
          <Tooltip title="Unlike">
            <IconButton
              className={classes.unLikedButton}
              onClick={handleUnlike}
              size="large"
            >
              <ThumbDownOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
        <Typography
          color="textSecondary"
          variant="h5"
        >
          {likes}
          {' '}
votes
        </Typography>
      </div>
    </div>
  );
}

export default Post;
