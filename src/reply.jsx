import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActions, CardHeader } from '@mui/material';
import React from "react";

const ReplyList = (props) => {
    return (
        props.replys &&  
            <Card>
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
            </Card>
        )         

}

export default ReplyList;