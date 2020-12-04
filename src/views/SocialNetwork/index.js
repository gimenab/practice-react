import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from 'src/components/Feed';
import PageTitle from 'src/components/PageTitle';
import Post from 'src/components/Post';


function SocialNetwork() {
  const [posts, setPosts] = useState([{
    url: '',
    id: ''
  }]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <PageTitle name="Vote" />
      <Feed>
        {posts.map((item, post) => (
          // eslint-disable-next-line react/no-array-index-key
          <Post key={post} url={item.url} />
        ))}
      </Feed>
    </div>
  );
}

export default SocialNetwork;
