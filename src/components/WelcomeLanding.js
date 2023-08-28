import React from "react";
import "./WelcomeLanding.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const WelcomeLanding = () => {
    return (
        <>
            <div className="welcome-landing-container">
                <h1 className="intro-name">Hello, I'm Corrine</h1>
                <h3 className="tagline">Junior Software Developer</h3>
                <div className="intro-icons">
                    <a
                        href="https://www.linkedin.com/in/corrinesing/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
                    </a>
                    <a
                        href="https://github.com/corrine2212"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="github" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default WelcomeLanding;
