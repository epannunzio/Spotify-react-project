import React from "react";
import './Main.css';
import card1 from '../assets/playlist/1.jpeg';
import card10 from '../assets/playlist/10.jpeg';
import card11 from '../assets/playlist/11.jpeg'; 
import card12 from '../assets/playlist/12.jpeg'; 
import { FaPlay } from "react-icons/fa";

const Main = () => {
  return(
    <main>
      <div className="main-container">
        <div className="playlist-container">
          <div id="result-playlists">
            <div className="playlist">
              <h1 id="greeting"></h1>
                <h2 className="session">Navegar por todas as seções</h2>
              </div>
        
              <div className="offer__scroll-container">
                <div className="offer__list">
                  <section className="offer__list-item">
                    <a href="" className="cards">
                      <div className="cards card1">
                        <img src={card1} alt=""></img>
                          <span>Boas festas</span>
                      </div>
                    </a>
        
                    <a href="" className="cards">
                      <div className="cards card2">
                        <img src={card10} alt=""></img>
                        <span>Feitos para você</span>
                      </div>
                    </a>
        
                    <a href="" className="cards">
                      <div className="cards card3">
                        <img src={card11} alt=""></img>
                        <span>Lançamentos</span>
                      </div>
                    </a>
        
                    <a href="" className="cards">
                      <div className="cards card4">
                        <img src={card12} alt=""></img>
                        <span>Creators</span>
                      </div>
                    </a>
        
                    <a href="" className="cards">
                      <div className="cards card5">
                        <img src={card11} alt=""></img>
                        <span>Para treinar</span>
                      </div>
                    </a>
        
                    <a href="" className="cards">
                      <div className="cards card6">
                        <img src={card12} alt=""></img>
                        <span>Podcasts</span>
                      </div>
                    </a>

                    <a href="" className="cards">
                      <div className="cards card1">
                        <img src={card1} alt=""></img>
                        <span>Boas festas</span>
                      </div>
                    </a>
      
                    <a href="" className="cards">
                      <div className="cards card2">
                        <img src={card10} alt=""></img>
                        <span>Feitos para você</span>
                      </div>
                    </a>
                  </section>
                </div>
              </div>
            </div>
        
          <div id="result-artist" className="hidden">
            <div className="grid-container">
              <div className="artist-card" id="">
                <div className="card-img">
                  <img id="artist-img" className="artist-img" />
                  <div className="play">
                    <FaPlay className="play-icon" />
                  </div>
                </div>

                <div className="card-text">
                  <a title="Foo Fighters" className="vst" href="/">
                    <span className="artist-name" id="artist-name"></span>
                    <span className="artist-categorie">Artista</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Main;