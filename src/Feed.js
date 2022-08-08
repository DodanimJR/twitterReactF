import React from "react";
import TweetBox from "./TweetBox";
import TweetList from "./tweetList";
import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import "./Feed.css";


function Feed() {
  const [token, setToken] = useState(null);
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    window.location.href = "/login";

    setToken(null);

  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token!=null){
      setToken(token);
      const decodedToken = jwt_decode(token)
      if(decodedToken.exp*1000 < Date.now()){
        logout();
      }

    }
  },[token]);




  const userAvatar = localStorage.getItem("userAvatar");
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
  const clickHandlerFav = (id) => {
    console.log("clickedID", id);
    let hola =document.getElementById(id);
    let adios =document.getElementById('likes'+id);
    
    if (hola.style.color === "red") {
      hola.style.color = "purple";
      adios.innerHTML=parseInt(adios.innerHTML)-1;
    }else{
      hola.style.color = "red";
      adios.innerHTML=parseInt(adios.innerHTML)+1;
      
    }
  }
  const [tweets, setTweets] = useState(null);
  
  const fetchData = async (url, hook) => {
    try{
      const result = await axios.get(url,config);
      hook(result.data.reverse());
      
    } catch (err){
      console.error(err);
    }
  }
  const hola = async () => {
    if(localStorage.getItem("token") != null){
      fetchData("http://localhost:8000/post",setTweets);
    }
  }
  const getNewTweets = () => {
    setTweets(null);
  }
  useEffect(() => {
    if(!tweets){
      hola();
    }else{
      
      console.log(tweets);
    }
  }, tweets);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox hola={()=>hola()} getNewTweets={getNewTweets} userAvatar={userAvatar}/>
      <TweetList tweets={tweets} clickHandlerFav={clickHandlerFav} getNewTweets={getNewTweets} />
    </div>
  );
}

export default Feed;
