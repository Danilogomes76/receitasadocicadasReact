import React from 'react';
import { Adicionais, Container, H1, P, Sobre } from './style.jsx'

function Footer() {

    return (
        <Container>
            <Sobre>
                <H1>- Sobre -</H1>
                <P>Doces feitos com muito amor para você.</P>
                <P>Bolos | Brownies | Bem-casados | Docinhos | Bolos de Pote | Trufas | Bolos</P>
            </Sobre>
            <Adicionais>
                <H1>- Informações Adicionais -</H1>
                <P>Sou apaixonado pela arte de fazer doce. Desde 2018 ofereceço meu melhor trabalho com doces de excelente qualidade, feitos com os melhores ingredientes.</P>
            </Adicionais>

        </Container>
    )
}

export default Footer;
