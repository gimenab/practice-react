import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from 'src/components/Feed';
import PageTitle from 'src/components/PageTitle';
import Post from 'src/components/Post';

function SocialNetwork() {
  // const [voteId, setVoteId] = useState('');
  const [votes, setVotes] = useState([{
    image_id: '',
    value: 0,
  }]);
  const [posts, setPosts] = useState([{
    url: '',
    id: '',
  }]);
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=20')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        loadVotes(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const loadVotes = () => {
    // cargar los votos de cada imagen
    axios.get('https://api.thecatapi.com/v1/votes', { headers: header })
      .then((res) => {
        console.log(res);
        // const newArray = [];
        // res.data.forEach((element) => {
        //   newArray.push(element);
        // });
        setVotes(res.data);
        // votesIntoPost(votes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const votesIntoPost = () => {
  // };
  return (
    <div>
      <PageTitle name="Vote" />
      <Feed>
        {posts.map((item, post) => (
          // eslint-disable-next-line react/no-array-index-key
          <Post key={post} url={item.url} id={item.id} />
        ))}
      </Feed>
    </div>
  );
}

export default SocialNetwork;
