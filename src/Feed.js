import React from "react";
import TweetBox from "./TweetBox";
import TweetList from "./tweetList";
import axios from "axios";
import { useState, useEffect } from "react";

import "./Feed.css";


function Feed() {
  const [tweets, setTweets] = useState(null);
  const fetchData = async (url, hook) => {
    try{
      const result = await axios.get(url);
      hook(result.data);
      
    } catch (err){
      console.error(err);
    }
  }
  const hola = async () => {
    fetchData("http://localhost:8000/post",setTweets);
  }
  useEffect(() => {
    console.log(tweets);
  }, tweets);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox hola={()=>hola()}/>
      <TweetList tweets={tweets}/>

      {/* <FlipMove>
        {tweets.map((tweet) => (
          <tweet
            key={tweet.text}
            displayName={tweet.displayName}
            username={tweet.username}
            verified={tweet.verified}
            text={tweet.text}
            avatar={tweet.avatar}
            image={tweet.image}
          />
        ))}
      </FlipMove> */}
    </div>
  );
}

export default Feed;
