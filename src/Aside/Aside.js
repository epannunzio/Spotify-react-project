import React from "react";
import './Aside.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FaBook, FaGlobe, FaHome, FaPlus, FaSearch } from "react-icons/fa";

const Aside = () => {
  return(
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="#">
            <img src={logoSpotify} alt="logo spotify"></img>
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <FaHome />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaSearch />
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FaBook />
            <span>Sua biblioteca</span>
          </button>
          <FaPlus />
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div className="cookies">
          <a href="#">Cookies</a>
        </div>

        <div className="languages">
          <button className="languages__button">
            <FaGlobe />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Aside;
