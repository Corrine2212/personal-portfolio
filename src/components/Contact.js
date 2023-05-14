import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <p>
                    If you’d like to get in touch, please don’t hesitate to contact me
                    through the options below:
                </p>
                <div className="contact-icons">
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


export default Contact;
