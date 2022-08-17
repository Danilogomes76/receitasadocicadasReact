import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Img, Container } from './style';

function CarouselComponent(props) {

    return (
        <Container>
            <Carousel interval='4000' height={'500px'}>
                <Img src={props.imgs.doce1} alt="doce1"></Img>
                <Img src={props.imgs.doce2} alt="doce2"></Img>
                <Img src={props.imgs.doce3} alt="doce3"></Img>
            </Carousel>
        </Container>
    )
}

export default CarouselComponent;