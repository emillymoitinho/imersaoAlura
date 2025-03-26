import React from "react";
import './Sidebar.css';
import logoSpo from '../assets/icons/logo-spotify.png'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar___navigation">
                <div className="logo">
                    <a href="#">
                        <img src={logoSpo} alt="Logo do Spotify" />
                    </a>
                </div>

                <ul>
                    <li>
                        <a href="#">
                            <span className="fa fa-home"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span><i className="fa fa-search"></i></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav> 

            <div className="library">
                <div className="library__content">
                    <div className="logo__library">
                        <i className="fa fa-book"></i>
                        <p>Sua Biblioteca</p>
                    </div>
                    <i className="fa fa-plus"></i>
                </div> 

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar</span>
                        <button className="section-playlist__button">
                            <span>Criar Playlist</span>
                        </button> 
                    </div> 
                </section> 

                <div className="cookies">
                    <a href="#">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div> 
            </div> 
        </div>
    );
}

export default Sidebar;
