import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActions, CardHeader } from '@mui/material';
import React from "react";
import Link from '@mui/material/Link';

const ReplyList = (props) => {
    console.log( "props.replys",props.replys);
    return (
        props.replys &&  
            <Card sx={{
                marginRight: "4px",
                fontSize: "16px",
                letterSpacing: "2px",
                color: "#000000",
                border: "2px solid #50b7f5",
                padding: "0.25em 0.5em",
                position: "relative",
                maxWidth: "100%",
              }}>
                <CardHeader avatar={<Avatar src={props.replys.author['avatar']}/>} 
                title={
                    <Typography variant="body2" color="text.secondary">
                        {props.replys.author['username']}
                    </Typography>
                }>
                </CardHeader>
                <CardContent>                    
                    <Typography variant="body2" color="text.secondary">
                        {props.replys.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/tweet/${props.replys.PostId}`} variant="body2">
                        {'see full thread...'}
                    </Link>
                </CardActions>
            </Card>
        )         

}

export default ReplyList;