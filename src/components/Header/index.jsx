import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoHeader.png'
import { HeaderComponent, Separator } from './style.jsx'

function Header() {

    return (
        <HeaderComponent>
            <Separator>
                <div>
                    <img alt='logo' src={logo} />
                    <h1>Receitas Adocicadas</h1>
                </div>

                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/receitas'}><li>Receitas</li></Link>
                    <Link to={'/contato'}><li>Contato</li></Link>
                    <Link to={'/sobre'}><li>Sobre</li></Link>
                </ul>
            </Separator>
        </HeaderComponent>
    )
}

export default Header;