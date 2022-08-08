import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Tweet from "./tweet";
import Widgets from "./Widgets";
import { useParams } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";

const TweetView = () => {
  const user = JSON.parse(localStorage.getItem('user')).user;
  console.log('userTweetBox',user.avatar);
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

    const [Tweetr, setTweetr] = React.useState(null);

    const fetchData = async (url, hook) => {
        try{
          const result = await axios.get(url,config);
          console.log(result.data);
          hook(result.data);
          
        } catch (err){
          console.error(err);
        }
    }
    const {id} = useParams();
    const hola = async () => {
        if(localStorage.getItem("token") != null){
            console.log("hola");
            fetchData(`http://localhost:8000/post/${id}`,setTweetr);
        }
    }
    useEffect(()=>{
        if(Tweetr==null){
            hola();
        }else{
            console.log(Tweetr.response);
        }
    },[Tweetr]);
    
    return (
        <div className="app">
            <Sidebar sx={{
                width: '25%',
            }}/>
            {Tweetr && <Tweet tweet={Tweetr.response} sx={{
                width: '50%',
            }}/>}
            <Widgets sx={{
                width: '25%',
            }}/>
        </div>
    );
}

export default TweetView;