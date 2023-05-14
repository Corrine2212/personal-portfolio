import React from 'react';
import './Cv.css'

const LanguagesFrameworks = () => {
    return (
        <>
            <div className="lang-frame-container">
            <h3>Languages & Frameworks</h3>
            <img className='cv-images' src="./images/logos/html.png" alt="html logo" />
                <img className='cv-images' src="./images/logos/css.png" alt="css logo" />
                <img className='cv-images' src="./images/logos/reactlog.png" alt="react logo" />
                <img className='cv-images' src="./images/logos/jslogo.png" alt="javascript logo" />
                <img className='cv-images' src="./images/logos/pythonlogo.png" alt="python logo" />
                <img className='cv-images' src="./images/logos/javalogo.png" alt="java logo" />
                <img className='cv-images' src="./images/logos/node.png" alt="node.js logo" />
                <img className='cv-images' src="./images/logos/mongo.png" alt="mongoDB logo" />
                <img className='cv-images' src="./images/logos/sql.png" alt="PostgreSQL logo" />
                <img className='cv-images' src="./images/logos/flask.png" alt="Flask logo" />
            </div>
        </>
    );
}

export default LanguagesFrameworks;