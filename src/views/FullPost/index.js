import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DetailBox from 'src/components/DetailsBox/index';
import './index.scss';
import Post from 'src/components/Posts';
import Favourite from 'src/components/Favourite/index';
import Header from 'src/components/Header';
import PageTitle from 'src/components/PageTitle';


const header = {
  ContentType: 'application/json',
  'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
};
function FullPost({onChangeVote, handleDownVote, handleUpVote, deleteMyVote, sendDownVote, sendUpVote, changeVoteValue}) {
  const { id } = useParams('');
  const history = useHistory('');
  const [fullPost, setFullPost] = useState({});
  const [votesFullPost, setVotesFullPost] = useState([{}]);
  const [isPostVotes, setIsPostVotes] = useState();

  const user = 'my-user-1234';

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/images/${id}`)
      .then((res) => {
        votesOfFullPost(res.data).then((votesFullPost) => {
          console.log(res.data, 'image');
          console.log(votesFullPost, 'votes');
          const postVoted = votesFullPost.findIndex((vote) => (vote.image_id === id && vote.sub_id === user));
          const isPostVoted = postVoted >= 0;
          setFullPost({
            height: res.data.height,
            id: res.data.id,
            url: res.data.url,
            width: res.data.width,
            isVotesByCurrentUser: isPostVoted, // guardar en esta variable si la imagen fue votada (true) o no (false)
            voteValue: isPostVoted ? !!votesFullPost[postVoted].value : null, // guardar en esta variable si el voto es positivo (true) o negativo (false)
            balance: 2, // guardar en esta variable la cantidad total de votos que tiene esta imagen
          });

        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* si utilizo fullPost.id tendre que llamar a la
  funcion una vez ejecutada el setFUllPost o puede ser una función asyncrona */

  const getVoteBalance = (votesRes) => {
    votesRes.filter((vote) => vote.image_id === fullPost.id).reduce((acc, curr) => {
      if (curr.value) {
        acc += 1;
      } else {
        acc -= 1;
      }
      return acc;
    }, 0);
  };

  const votesOfFullPost = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/votes', { headers: header });
      setVotesFullPost(res.data);
      // getVoteBalance();
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  // const bringVoteImage = async () => {
  //   try{
  //     console.log(imgVoteIndex);

  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // };

  const handleClick = () => {
    history.goBack();
  };
  return (

    <div className="container">
      <Header><PageTitle name={id} /></Header>
      <Button
        className="link-button"
        onClick={() => { handleClick(); }}
        variant="contained"
        color="primary"
      >
          Back to Feed
      </Button>

      <DetailBox className="fullPost">


        <Post
          url={fullPost.url}
          key={fullPost}
          id={fullPost.id} // fullPost.id
          postIndex={fullPost} // etc
          balance={fullPost.balance}
          changeVoteValue={onChangeVote}
          definitiveVoteValue={fullPost.voteValue}
         
        >
          <Favourite id={fullPost.id} user={user} />
        </Post>
      </DetailBox>


    </div>
  );
}

export default FullPost;
