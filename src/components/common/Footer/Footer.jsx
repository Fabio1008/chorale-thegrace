import React from "react";
import "./Footer.scss";

// Import des icônes
import facebookIcon from "../../../assets/icons/facebook.png";
import instagramIcon from "../../../assets/icons/instagram.png";
import youtubeIcon from "../../../assets/icons/youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/concerts">Concerts</a></li>
            <li><a href="/espace-membre">Espace Membre</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email : <a href="mailto:chorale@example.com">chorale@example.com</a></p>
          <p>Téléphone : +33 6 00 00 00 00</p>
        </div>

        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Chorale The Grace 🎶 - Tous droits réservés</p>
      </div>
    </footer>
  );
}
