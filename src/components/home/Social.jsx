import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
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
    ); 
}

export default Social;