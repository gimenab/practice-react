import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from 'src/components/Feed';
import PageTitle from 'src/components/PageTitle';
import Post from 'src/components/Posts';
import Header from 'src/components/Header';
import Button from '@material-ui/core/Button';


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
    filterImageBySize3();
    axios.get('https://api.thecatapi.com/v1/images/search?limit=5')
      .then((res) => {
        console.log(res.data);
        loadVotes(posts).then((votesRes) => {
          const postsArray = [];
          res.data.forEach((img) => {
            const imgVoteIndex = votesRes.findIndex((vote) => (vote.image_id === img.id && vote.sub_id === 'my-user-1234'));
            const isImgVoted = imgVoteIndex >= 0;
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
                  acc += 1;
                } else {
                  acc -= 1;
                }
                return acc;
              }, 0)
            });
          });
          setPosts(postsArray);
        }).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadVotes = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/votes?limit=100000', { headers: header });
      setVotes(res.data);
      return res.data;
      // votesIntoPost(votes);
    } catch (err) {
      console.log(err);
    }
  };


  // const filterImageBySize = () => {
  //   axios.get('https://api.thecatapi.com/v1/images/search?limit=4')
  //     .then((response) => {
  //       console.log(response.data);
  //       const mobileImages = [];
  //       const tabletImages = [];
  //       const largeImages = [];
  //       const otherSizes = [];
  //       response.data.forEach((element) => {
  //         if (element.width < 400 && element.height < 510) {
  //           mobileImages.push(element);
  //           console.log(mobileImages, 'mobile !!!!');
  //         } else if (element.width > 460) {
  //           tabletImages.push(element);
  //           console.log(tabletImages, 'tablet !!!!');
  //         } else if ( element.height > 580) {
  //           largeImages.push(element);
  //           console.log(largeImages, 'large!!!');
  //         } else {
  //           otherSizes.push(element);
  //           console.log(otherSizes, 'others!!!!');
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const filterImageBySize2 = () => {
  //   axios.get('https://api.thecatapi.com/v1/images/search?limit=4')
  //     .then((response) => {
  //       console.log(response.data);
  //       const mobileImages = [];
  //       const tabletImages = [];
  //       const largeImages = [];
  //       const otherSizes = [];
  //       response.data.forEach((element) => {
  //         const widthSize = element.width;
  //         const eigthtSize = element.height;
  //         if (widthSize < 400 && eigthtSize < 510) {
  //           mobileImages.push(element);
  //           console.log(mobileImages, 'mobile !!!!');
  //         } else if (widthSize > 460 && eigthtSize > 510) {
  //           tabletImages.push(element);
  //           console.log(tabletImages, 'tablet !!!!');
  //         } else if ((widthSize > 400 && widthSize < 460) && eigthtSize > 580) {
  //           largeImages.push(element);
  //           console.log(largeImages, 'large!!!');
  //         } else {
  //           otherSizes.push(element);
  //           console.log(otherSizes, 'others!!!!');
  //         }
  //       });
  //       console.log(mobileImages,largeImages,tabletImages, otherSizes)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const filterImageBySize3 = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=4')
      .then((response) => {
        console.log(response.data);
        const array1 = [];
        const array2 = [];
        const array3 = [];
        const array4 = [];
        const checkingsize = []
        const imageOfArray1 = false;
          const imageOfArray2 = false;
          const imageOfArray3 = false;
          const imageOfArray4 = false;
        response.data.forEach((element) => {
          const widthSize = element.width;
          const heigthtSize = element.height;
          
          if (widthSize < 400 && heigthtSize < 510) {
            imageOfArray1 = true;
            console.log(imageOfArray1)
            checkingsize.push(imageOfArray1);
          } else if (widthSize > 460) {
            imageOfArray2 = true;
            console.log(imageOfArray2)
            checkingsize.push(imageOfArray2);
          } else if (heigthtSize > 580) {
            imageOfArray3 = true;
            checkingsize.push(imageOfArray3);

          } else {
            imageOfArray4 = true;
            checkingsize.push(imageOfArray4);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const onChangeVote = (value, index) => {
    posts[index].voteValue = value;
    posts[index].balance = value ? posts[index].balance + 1 : posts[index].balance - 1;
    setPosts([...posts]);
  };

  return (
    <div className="container">

      <Header><PageTitle name="All Cats" /></Header>
      {/* <Button
        className="link-button"
        onClick={() => { filterImageBySize2(); }}
        variant="contained"
        color="primary"
      >
          filter images
      </Button> */}

      <Feed>
        {posts.map((item, post) => (
          // eslint-disable-next-line react/no-array-index-key
          <Post
            key={post}
            id={item.id}
            url={item.url}
            postIndex={post}
            balance={item.balance}
            changeVoteValue={onChangeVote}
            definitiveVoteValue={item.voteValue}
          />
        ))}
      </Feed>
    </div>
  );
}

export default SocialNetwork;
