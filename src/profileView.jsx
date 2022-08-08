import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { useParams } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import Profile from "./profile";

const ProfileView = () => {
    const user = JSON.parse(localStorage.getItem('user')).user;
    console.log('PROFILEVIEW',user.token);
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
            fetchData(`http://localhost:8000/user/${id}`,setTweetr);
        }
    }
    useEffect(()=>{
        if(Tweetr==null){
            hola();
        }else{
            console.log(Tweetr.response);
        }
    },[Tweetr]);

    
    

    return(
        <div className='app'>
            <Sidebar />
            {Tweetr && <Profile user={Tweetr.response}/>}
        </div> 
    )
}

export default ProfileView;