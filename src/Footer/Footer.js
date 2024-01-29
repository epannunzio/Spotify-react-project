import React from "react";
import './Footer.css';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__txt"> 
        <p>Testar o Premium de graça</p>
        <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
      </div>

      <div className="footer__container-btn">
        <button>
          <span>Inscreva-se grátis</span>
        </button>
      </div>
    </footer>
  )
};

export default Footer;