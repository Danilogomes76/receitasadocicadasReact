import React from 'react';
import Header from '../../Header/index.jsx';
import Footer from '../../Footer/index.jsx';
import CarouselComponent from '../../CarouselComponent/index.jsx';
import CardApresentation from '../../Card/index.jsx';
import recipes from '../../../recipesHomeCards.jsx'
import { Container, FoodContainer, FoodApresentation, H1 } from './style.jsx'
import { imgs } from '../../../assets/all';
import WhatsappIcon from '../../WhatsappIcon/index.jsx';



function Main() {

    return (
        <Container>
            <WhatsappIcon/>
            <Header />
            <CarouselComponent imgs={imgs} />
            <FoodContainer>
                <H1> - Receitas para o seu dia! - </H1>
                <FoodApresentation>
                    {recipes.map((recipe) => {
                        return <CardApresentation title={ recipe.title } key={recipe.id} description={ recipe.description } src={ recipe.src } />
                    })}
                </FoodApresentation>
            </FoodContainer>
            <Footer/>
        </Container>
    )
}

export default Main;