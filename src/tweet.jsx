import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
import ResponsiveDialog from './responsiveDialog';
import ReplyList from './reply';
import TweetBox from "./TweetBox";
import Replies from "./replyList";

const Tweet = (props)=>{
    console.log("propsTWEET",props.tweet);
    
    return (
        // <div>
        //     <h1>hola</h1>
        // </div>
        props.tweet ?
        <div>
            <Card>
            <CardHeader avatar={<Avatar src={props.tweet.author['avatar']}></Avatar>} title={props.tweet.author['username']}></CardHeader>
            <CardContent>
                <Typography>
                    {props.tweet.text}
                </Typography>
            </CardContent>
            <Replies replys={props.tweet.replys}/>
            </Card>
            
        </div>:
        <h1>loading...</h1>
        
        

    );
        
    

}

export default Tweet;