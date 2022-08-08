import React, { useState,useEffect } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import axios from "axios";
import jwt_decode from "jwt-decode";

function TweetBox(props) {
  const user = JSON.parse(localStorage.getItem('user')).user;
  console.log('userTweetBox',user);
  const userAvatar = user.avatar;
  const token = user.token
  const logout = () => {
    localStorage.removeItem("user");
    
    window.location.href = "/login";

    token = null;

  }

  useEffect(()=>{
    
    if(user.token!=null){
      //console.log("token is not null",user.token);
      const decodedToken = jwt_decode(user.token)
      if(decodedToken.exp*1000 < Date.now()){
        logout();
      }

    }
  },[token]);

  const validToken = () => {
    
    if ( user.token != null) {
      const token = user.token;
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
        "authorId": user.id,
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
