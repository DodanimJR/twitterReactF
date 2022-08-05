import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#550a8a',
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
        'Edu',
        'SA',
        'cursive',
      ].join(','),
    },
    card:{
  
  
    },
    
    
  });

const TweetList = (props)=>{

//   const clickHandler=(id)=>{
//     props.setclickedIndex(id);
//     console.log("elementoID CLICKEADO",props.clickedIndex);  
//   }
  console.log("Lista que entra:",props.tweets);
  return(
    props.tweets && props.tweets.map((el, i) => 

      <ThemeProvider theme={theme}>
        <Card key={i} sx={{
          marginRight: "4px",
      fontSize: "16px",
      letterSpacing: "2px",
      color: "#000000",
      border: "3px solid",
      padding: "0.25em 0.5em",
      boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
      position: "relative",
      maxWidth: 285,
        }} style={{margin: 8}} theme={theme} className="Dodi" raised>
        
          <CardContent>
            <Typography variant='h4' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {el.author['username']}
            </Typography>
            <Typography variant='h5' sx={{ mb: 1.5 }} color="text.secondary">
              {el.text}
            </Typography>
            <Typography variant="body2">
              Likes: {el.likes}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" color="primary"  >
            view
          </Button>
          </CardActions>
        
        </Card>
      </ThemeProvider>
        
    
  )
  );
}
export default TweetList;