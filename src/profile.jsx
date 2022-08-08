import React from "react";
import { Avatar } from "@mui/material";
import "./App.css";
import TweetList from "./tweetList";
import Replies from "./replyList";
import ReplyList from "./reply";
function Profile(props) {
    const user = props.user;
    console.log("user",user);
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
      const clickHandlerFollow = (id,author) => {
        console.log("clickedID", id);
        console.log('author',author);
        let hola =document.getElementById("postAuthor"+id);
        if (hola.style.backgroundColor === "red") {
          hola.style.backgroundColor = "purple";
        }else{
          hola.style.backgroundColor = "red";
        }
      }
      const getNewTweets = () => {
        console.log("getNewTweets");
      }
    return (
        <div className="profile">
        
        <img className="imgBanner" src="https://business.twitter.com/content/dam/business-twitter/textured-backgrounds/banner-full-blue-scratch.jpg.twimg.1280.jpg"></img>
        <Avatar src={user.avatar} sx={{ width: 150, height: 150 }}/>
        <div className="profile__info">
            <h1>@{user.username}</h1>
            <h4>{user.email}</h4>
            <h4>{user.following.length}following</h4>
            <h4>{user.followedBy.length}followers</h4>
        </div>
            <div className="tweetsNReplys" >
                <div>
                    <h1>Tweets</h1>
                    <TweetList tweets={user.posts} clickHandlerFav={clickHandlerFav} getNewTweets={getNewTweets} clickHandlerFollow={clickHandlerFollow} follows={user.following} /> 
                </div>
                <div>
                    <h1>Replys</h1>
                    <Replies replys={user.replys}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;