import React from "react";
import TweetBox from "./TweetBox";
import TweetList from "./tweetList";
import axios from "axios";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import "./Feed.css";


function Feed() {
  const user = JSON.parse(localStorage.getItem('user')).user;
  console.log(user);
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
  const clickHandlerFav = (id) => {
    console.log("clickedID", id);
    let corazon =document.getElementById(id);
    let contadorLikes =document.getElementById('likes'+id);
    
    if (corazon.style.color === "red") {
      corazon.style.color = "purple";
      contadorLikes.innerHTML=parseInt(contadorLikes.innerHTML)-1;
    }else{
      corazon.style.color = "red";
      contadorLikes.innerHTML=parseInt(contadorLikes.innerHTML)+1;
      
    }
  }
  const postData = (data)=>{
    axios.post( 
      'http://localhost:8000/follow',
      data,
      config
    )
    .then( ( response ) => {
      console.log( response )
    } )
    .catch()
  }
  const clickHandlerFollow = async (id,author) => {
    console.log("clickedID", id);
    console.log('author',author);
    let followerId=user.id;
    let followeeId=author.id;
    console.log('followerId',followerId);
    console.log('followeeId',followeeId);
    let userFollows= user.following;
    const userFollowsIds = [];
    //console.log(user.following);
    for(let follow of user.following){
        userFollowsIds.push(follow["followingId"]);
    }
    let boton =document.getElementById("postAuthor"+id);
    if(followerId!=followeeId){
      if(userFollowsIds.includes(followeeId)){
        console.log("YA LO SIGUE");
        
      }else{
        if (boton.innerHTML == "Follow") {
          let response = await postData({
            "followerId":followerId,
            "followingId":followeeId
          });
          console.log(response);
          boton.style.backgroundColor = "purple";
          boton.style.color="white";
          boton.innerHTML="Following";
        }else{
          boton.style.backgroundColor = "white";
          boton.style.color="black";
          boton.innerHTML="Follow";
        }
      }
      
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
    if(token!=null){
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
      <TweetBox hola={()=>hola()} getNewTweets={getNewTweets} userAvatar={userAvatar} />
      <TweetList tweets={tweets} clickHandlerFav={clickHandlerFav} getNewTweets={getNewTweets} clickHandlerFollow={clickHandlerFollow} follows={user.following} />
    </div>
  );
}

export default Feed;
