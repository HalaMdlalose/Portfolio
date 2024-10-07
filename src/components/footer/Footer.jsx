import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';



const Footer = () => {

    const addresses = [
        "Rivonia, Sandton, South Africa",
        "Arbor Park, Newcastle, South Africa",
        "Sharon Park, Nigel, South Africa"
      ];
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Halalisani Asanda Mdlalose</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#personalDevelopment" className="footer__link">Personal Development</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/hala.mdlalose/" className="home__social-icon" target="_blank">
                    <FiInstagram />
                </a>
                <a href="https://github.com/HalaMdlalose" className="home__social-icon" target="_blank">
                    <FiGithub />
                </a>
                <a href="https://linkedin.com/in/halalisani-mdlalose" className="home__social-icon" target="_blank">
                    <FiLinkedin />
                </a>    
            </div>

            {/* <div className='footer__address__list'>
            <p className="footer__address__link">Rivonia, Sandton, South Africa</p> 
            <p className="footer__address__link">Arbor Park, Newcastle, South Africa</p> 
            <p className="footer__address__link">Sharon Park, Nigel, South Africa</p> 

            
            </div> */}

            <p className="footer__address">
              {addresses.join("  |  ")}
            </p> {/* Added address with separator */}
            
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;