import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActions, CardHeader } from '@mui/material';
import React from "react";
import Link from '@mui/material/Link';

const Replies = (props) => {
    console.log("props",props.replys);
    return (
        props.replys && props.replys.map((el,i)=>
        <Card key={i} sx={{
            width: '700px',
        }}>
                <CardHeader avatar={<Avatar src={el.author['avatar']}/>} 
                title={
                    <div>
                        <Typography variant="body2" color="text.secondary">
                        Replying to: @{el.originalPost.author['username']}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {el.author['username']}
                        </Typography>
                    </div>
                }>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {el.text}
                    </Typography>
                </CardContent>
            </Card>
        )  
    );     

}

export default Replies;