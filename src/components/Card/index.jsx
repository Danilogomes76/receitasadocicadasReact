import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Content, Img } from './style';



function CardApresentation(props) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Content>
                    <Img alt={props.title} src={props.src}></Img>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </Content>
            </CardContent>
        </Card>
    )
}

export default CardApresentation;
