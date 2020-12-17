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
  const [posts, setPosts] = useState([]);
  const header = {
    ContentType: 'application/json',
    'x-api-key': '88fe8df0-65c3-4f4e-99af-18a603cecf8e',
  };

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => {
        loadVotes(posts).then((votesRes) => {
          let postsArray = []
          res.data.forEach((img) => {
            let imgVoteIndex = votesRes.findIndex((vote) => (vote.image_id === img.id && vote.sub_id === 'my-user-1234'))
            let isImgVoted = imgVoteIndex >= 0
            postsArray.push({
              breeds: img.breeds,
              height: img.height,
              id: img.id,
              url: img.url,
              width: img.width,
              isVotesByCurrentUser: isImgVoted,
              voteValue: isImgVoted ? !!votesRes[imgVoteIndex].value : null,
              balance: votesRes.filter((vote) => vote.image_id === img.id).reduce((acc, curr) => {
                if (curr.value) {
                  acc += 1
                } else {
                  acc -= 1
                }
                return acc
              }, 0)
            })
          })
          setPosts(postsArray)
        }).catch((err) => {
          console.log(err)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadVotes = async () => {
    // cargar los votos de cada imagen
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/votes', { headers: header })
      setVotes(res.data);
      return res.data
      // votesIntoPost(votes);
    } catch (err) {
      console.log(err);
    }
  };

  // const votesIntoPost = () => {
  // };

  return (
    <div>
      <PageTitle name="Vote" />
      <Feed>
        {posts.map((item, post) => (
          // eslint-disable-next-line react/no-array-index-key
          <Post key={post} url={item.url} id={item.id} balance={item.balance} definitiveVoteValue={item.voteValue}/>
        ))}
      </Feed>
    </div>
  );
}

export default SocialNetwork;
