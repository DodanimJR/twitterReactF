import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import axios from "axios";

function TweetBox(props) {
  const userAvatar = props.userAvatar;
  const validToken = () => {
    if (localStorage.getItem("token") != null) {
      const token = localStorage.getItem("token");
      return token;
    }else{
      return null;
    }
  }
  let config = {
    headers: {
      'Authorization': 'Bearer ' + validToken()
    }
  }
  const [tweetMessage, setTweetMessage] = useState("");
  const postData = (data)=>{
    axios.post( 
      'http://localhost:8000/post',
      data,
      config
    )
    .then( ( response ) => {
      console.log( response )
    } )
    .catch()
  }

  const sendTweet = (e) => {
    e.preventDefault();

    console.log("sendTweet clicked");
    if (tweetMessage !== "") {
      
      let data = {
        "authorId": parseInt(localStorage.getItem("userId")),
        "text": tweetMessage,
      }
      console.log("data", data);
      postData(data);
      
      setTweetMessage("");
      props.getNewTweets();
    }else{
      alert("No se puede enviar un tweet vacío");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={userAvatar} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
