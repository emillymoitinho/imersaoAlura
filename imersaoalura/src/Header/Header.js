import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">

            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta Esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta Direita" />
                </button>

                <div className="header__search">
                    <img src={search} alt="Ícone de busca" />
                    <input id="search-input" type="text" maxLength={800} placeholder="O que você quer ouvir?" />
                </div>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>

        </nav>
    );
}

export default Header;
