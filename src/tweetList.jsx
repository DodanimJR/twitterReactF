import React from 'react';
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


const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#50b7f5',
        darker: '#9e88ae',
      },
      neutral: {
        main: '#e7cffa',
        contrastText: '#fff',
      },
      text:{
        primary: "#000",
        secondary: "#000"
      }
      
    },
    typography:{
      fontFamily: [
        'montserrat',
      ].join(','),
    },
    card:{
  
  
    },
    
    
  });

const TweetList = (props)=>{
    const user = JSON.parse(localStorage.getItem("user")).user;
    const userFollowsIds = [];
    console.log(user.following);
    for(let follow of user.following){
        userFollowsIds.push(follow["followingId"]);
    }
    const clickHandlerFav=(id)=>{
        console.log("clickHandlerFav");
        props.clickHandlerFav(id);
    }
    const clickHandlerFollow=(id,author)=>{
        console.log("clickHandlerFollow");
        props.clickHandlerFollow(id,author);
    }
    
  console.log("Lista que entra:",props.tweets);
  return(
    props.tweets && props.tweets.map((el, i) => 

      <ThemeProvider theme={theme}>
        <Card key={i} sx={{
          marginRight: "4px",
          fontSize: "16px",
          letterSpacing: "2px",
          color: "#000000",
          border: "2px solid #50b7f5",
          padding: "0.25em 0.5em",
          position: "relative",
          maxWidth: "100%",
        }} style={{margin: 8}} theme={theme} raised>
            <CardHeader avatar={
                <Avatar src={el.author['avatar']}/>
            } title={
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {el.author['username']}
                </Typography>
            }
            action={
                <Button size="small" id={"postAuthor"+el.id} sx={{
                    backgroundColor: 'white',
                    border: '1px solid #50b7f5',
                }}  onClick={()=>clickHandlerFollow(el.id,el.author)} >
                  {user.id!==el.author.id && userFollowsIds.includes(el.author['id']) ? "Unfollow" : "Follow"}
                </Button>
            }>
            </CardHeader>
          <CardContent>
            <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
              {el.text}
            </Typography>
          </CardContent>
          <CardActions>
            <ResponsiveDialog postId={el.id} author={el.author} getNewTweets={props.getNewTweets}/>
            <Typography variant="body2">
                {el.replys.length}
            </Typography>
            <Button size="small" color="primary" id={el.id}  onClick={()=>clickHandlerFav(el.id)} >
                <FavoriteIcon /> 
            </Button>
            <Typography variant="body2" id={'likes'+el.id}>
                {el.likes}
            </Typography>
            <Button size="small" color="primary"  >
                <ShareIcon></ShareIcon>
            </Button>
          </CardActions>
          <ReplyList replys={el.replys[0]}/>
        </Card>
        
            
      </ThemeProvider>
        
    
  )
  );
}
export default TweetList;