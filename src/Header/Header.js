import React from "react";
import './Header.css';
import smallArrowRight from '../assets/icons/small-right.png';
import smallArrowLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = () => {
  return(
    <nav className="header__navigation">
      <div className="navigation">
          <button className="arrow-left">
            <img src={smallArrowLeft} alt=""></img>
          </button>
          <button className="arrow-right">
            <img src={smallArrowRight} alt=""></img>
          </button>
      </div>

      <div className="header__search">
          <img src={search} alt=""></img>
          <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?"/>
      </div>

      <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
      </div>
    </nav>
  )
};

export default Header;