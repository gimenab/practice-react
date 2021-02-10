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
function FullPost({
  children, url, postIndex, votesNumber, isVotesByCurrentUser,  voteValue, votedImageId, votes, definitiveVoteValue, balance, changeVoteValue, className, ...rest
}) {
  const { id } = useParams('');
  const history = useHistory('');
  const [fullPost, setFullPost] = useState({});
  const [votesFullPost, setVotesFullPost] = useState([{}]);
  const [isImgVoted, setIsImgVoted] = useState(voteValue);
  // const [isFavActive, setIsFavActive] = useState ();
  // const [result, setResult] = useState(balance); // 01
  // const [votesByUser, setVotesByUser] = useState([{}]);
  const [favorite, setFavorite] = useState([{}])

  const user = 'my-user-1234';

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/images/${id}`)
      .then((res) => {
        votesOfFullPost(res.data)
          .then(async(fetchedVotes) => {
            let responseIsFavorite = await isPostSaveAsFav(id) //? 
            const indexPostVoted = fetchedVotes.findIndex((item) => (item.image_id === id && item.sub_id === user));
            const isPostVoted = indexPostVoted >= 0;
            setFullPost({
              idFav : responseIsFavorite ? responseIsFavorite.id : undefined,
              height: res.data.height,
              id: res.data.id,
              url: res.data.url,
              width: res.data.width,
              isFavActive: !!responseIsFavorite,
              isVotesByCurrentUser: isPostVoted, 
              voteValue: isPostVoted ? !!fetchedVotes[indexPostVoted].value : null, 
              balance: fetchedVotes.filter((vote) => vote.image_id === id).reduce((acc, curr) => {
                if (curr.value) {
                  acc += 1;
                } else {
                  acc -= 1;
                }
                return acc;
              }, 0),
            });
          });
      })
     
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  console.log(fullPost);



  const votesOfFullPost = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/votes?limit=100000', { headers: header });
      setVotesFullPost(res.data);
      console.log(res.data);
      // getVoteBalance();
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  const isPostSaveAsFav = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/favourites',{headers: header});
      console.log(res.data);
      const isPostSaved= res.data.find((element => element.image_id == id));
      const idFavorite = isPostSaved.id;
      console.log('isPostSaved', isPostSaved, 'ids',   idFavorite);
      // setFavorite({

      //   //podria utilizar? ...fullPost
      //   id : idFavorite,
      //   idImage : isPostSaved.image_id,
      //   isFavActive : isPostSaved

      // })
      return isPostSaved;
    
     

    } catch(err) {
      console.log(err)
    }
  }
  
  console.log(favorite);

  

  const onChangeVotePost = (value) => {
    fullPost.voteValue = value;
    console.log(value);
    fullPost.balance = value ? fullPost.balance + 1 : fullPost.balance - 1;
    setFullPost({ ...fullPost });
  };

  const handleClick = () => {
    history.goBack();
  };
  // const handleFavClick = () => {
  //   setFullPost({
  //     ...fullPost,
  //     isFavActive: true
  //   })

  // }

  const handleFavClick = (event, idF) => {
    console.log(event);
    let value = event;
    if(value){
      setFullPost({
        ...fullPost,
        isFavActive:false,
        idFav: undefined
      })
    }
    else
    {
      setFullPost({
        ...fullPost,
        isFavActive: true,
        idFav: idF
      })
    }
  

  }




  
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
          id={fullPost.id} 
          postIndex={fullPost}
          balance={fullPost.balance}
          changeVoteValue={onChangeVotePost}
          definitiveVoteValue={fullPost.voteValue}
        

    
        >
          <p className="ids">
            {balance}
          </p>
          <p>{definitiveVoteValue}</p>
          <Favourite 
            id={fullPost.idFav}
            idImage={fullPost.id} 
            user={user}
            isFavActive={fullPost.isFavActive}
            // onFavClick={handleFavClick}
            onFavClick={function onFavAction(e){handleFavClick(fullPost.isFavActive, e);}}
            // onFavClick={(e)=>{handleFavClick(fullPost.isFavActive, e);}}
    
          
            /> 
       
        </Post>
      </DetailBox>


    </div>
  );
}

export default FullPost;
