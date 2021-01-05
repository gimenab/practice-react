import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography, IconButton, Tooltip, colors
} from '@material-ui/core';
import { useHistory } from 'react-router';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './index.scss';


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
  },
  withoutVote: {
    color: colors.grey[600],
  },
  positiveVote: {
    color: colors.lightGreen[600],
  },
  negativeVote: {
    color: colors.red[600],
  }
}));

function Post({
  children, id, url, votesNumber, votedImageId, votes, definitiveVoteValue, balance, className, ...rest
}) {
  const classes = useStyles();
  const [voted, setVoted] = useState(false);
  const [liked, setLiked] = useState();
  const [unliked, setUnliked] = useState();
  // const [likes, setLikes] = useState(0);
  const [voteId, setVoteId] = useState('');
  const [voteValue, setVoteValue] = useState(0);
  const [isTheVoteUp, setIsTheVoteUp] = useState(false);
  const [isTheVoteDown, setIsTheVoteDown] = useState(false);
  const [result, setResult] = useState(balance);
  const user = 'my-user-1234';

  const history = useHistory();

  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };
  const data = {
    image_id: `${id}`,
    sub_id: `${user}`,
    value: 1,
  };
  const dataDown = {
    image_id: `${id}`,
    sub_id: `${user}`,
    value: 0,
  };

  const sendUpVote = () => {
    axios.post('https://api.thecatapi.com/v1/votes', data, { headers: header })
      .then((res) => {
        console.log(res.data);
        setVoteId(res.data.id);
        setIsTheVoteDown(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const sendDownVote = () => {
    axios.post('https://api.thecatapi.com/v1/votes', dataDown, { headers: header })
      .then((res) => {
        console.log(res.data);
        setVoteId(res.data.id);
        setIsTheVoteUp(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMyVote = () => {
    axios.delete(`https://api.thecatapi.com/v1/votes/${voteId}`, { headers: header })
      .then((res) => {
        console.log(res.data);
        setIsTheVoteUp(false);
        setIsTheVoteDown(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteVote = () => {
    setUnliked(true);
    deleteMyVote(voteId);
    setResult(balance);
  };
  const handleDownVote = () => {
    // setUnliked(false);
    // setLiked(true);
    sendDownVote(voteValue);
    setIsTheVoteDown(true);
    setResult(balance - 1);
  };
  const handleUpVote = () => {
    // setUnliked(false);
    // setLiked(true);
    sendUpVote(voteValue);
    setIsTheVoteUp(true);
    setResult(balance + 1);
  };

  const showFullPost = () => {
    const idPost = id;
    history.push(`/full-post/${idPost}`);
  };
  return (
    <div className="post">
      <img
        className="picture"
        src={url}
        alt="cat for vote"
        onClick={showFullPost}
      />

      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        { definitiveVoteValue ? (
          <IconButton
            className={classes.positiveVote}
            size="medium"
            onClick={handleDeleteVote}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        ) : (
          <Tooltip title="positive">
            <IconButton
              className={classes.withoutVote}
              onClick={handleUpVote}
              size="medium"
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Tooltip>
        )}
        <Typography
          color="textSecondary"
          variant="h5"
        />
        { definitiveVoteValue === false || isTheVoteDown === true ? (
          <IconButton
            className={classes.negativeVote}
            onClick={handleDeleteVote}
            size="medium"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        ) : (
          <Tooltip title="negative">
            <IconButton
              className={classes.withoutVote}
              onClick={handleDownVote}
              size="medium"
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Tooltip>
        )}
        <p className="ids">{result}</p>
        {children}
      </div>
    </div>
  );
}

export default Post;
