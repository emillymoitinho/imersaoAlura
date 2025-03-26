import React, { useState, useEffect } from "react";
import './Main.css';

// Importando as imagens
import playlist1 from '../assets/playlist/1.jpeg';
import gospel from '../assets/playlist/gospel.jpeg';
import pop from '../assets/playlist/pop.jpeg';
import lancamentos from '../assets/playlist/3.jpeg';
import creators from '../assets/playlist/4.jpeg';
import paraTreinar from '../assets/playlist/5.jpeg';
import feitosParaVoce from '../assets/playlist/2.png';
import podcasts from '../assets/playlist/6.jpeg';
import sertanejo from '../assets/playlist/7.jpeg';
import sambaPagode from '../assets/playlist/8.jpeg';
import funk from '../assets/playlist/9.jpeg';
import mpb from '../assets/playlist/10.jpeg';
import rock from '../assets/playlist/11.jpeg';
import hipHop from '../assets/playlist/12.jpeg';
import indie from '../assets/playlist/13.jpeg';
import relax from '../assets/playlist/14.jpeg';
import musicaLatina from '../assets/playlist/15.jpeg';

const Main = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [artists, setArtists] = useState([]);
    const [showArtists, setShowArtists] = useState(false);

    const playlists = [
        { img: playlist1, title: "Boas Festa" },
        { img: gospel, title: "Gospel" },
        { img: pop, title: "Pop" },
        { img: lancamentos, title: "Lançamentos" },
        { img: creators, title: "Creators" },
        { img: paraTreinar, title: "Para Treinar" },
        { img: feitosParaVoce, title: "Feitos Para Você" },
        { img: podcasts, title: "Podcasts" },
        { img: sertanejo, title: "Sertanejo" },
        { img: sambaPagode, title: "Samba e Pagode" },
        { img: funk, title: "Funk" },
        { img: mpb, title: "MPB" },
        { img: rock, title: "Rock" },
        { img: hipHop, title: "Hip Hop" },
        { img: indie, title: "Indie" },
        { img: relax, title: "Relax" },
        { img: musicaLatina, title: "Música Latina" },
    ];

    // Função para buscar os artistas na API
    useEffect(() => {
        if (searchTerm === '') {
            setShowArtists(false);
            return;
        }

        fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                setArtists(data);
                setShowArtists(true);
            })
            .catch((error) => console.error('Erro ao buscar artistas:', error));
    }, [searchTerm]); // Chama a API sempre que o searchTerm mudar

    return (
        <div className="playlist-container">
            {/* Input de busca
            <input
                id="search-input"
                type="text"
                placeholder="Buscar artistas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            /> */}

            {/* Exibição das playlists ou dos artistas */}
            {!showArtists ? (
                <div id="result-playlist">
                    <div className="title__playlist">
                        <h1>Bom dia</h1>
                        <h2>Navegar por todas as seções</h2>
                    </div>

                    <div className="group-cards">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                {playlists.map((playlist, index) => (
                                    <a href="#" key={index} className="cards">
                                        <div className={`cards card${index + 1}`}>
                                            <img src={playlist.img} alt={playlist.title} />
                                            <span>{playlist.title}</span>
                                        </div>
                                    </a>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="result-artist">
                    <div className="grid-container">
                        {artists.length > 0 ? (
                            artists.map((artist, index) => (
                                <div className="artist-card" key={index}>
                                    <div className="card-img">
                                        <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                                        <div className="play">
                                            <span className="fa fa-solid fa-play"></span>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <span className="artist-name">{artist.name}</span>
                                        <span className="artist-categorie">Artista</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum artista encontrado</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
