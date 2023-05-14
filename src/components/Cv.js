import React from 'react';
import Tools from './Tools'
import LanguagesFrameworks from './LanguagesFrameworks';
import Experience from './Experience';

import './Cv.css'

const Cv = () => {
    return (

        <>
            <div className="cv-container">
                <h2 className='cv-title'>CV</h2>
                <div className="cv-grid">
                    <Tools />
                    <LanguagesFrameworks/>
                    {/* <h3>Certificates??</h3> */}
                    <Experience />
                    {/* <p>include freecodecamp, vision2learn and codeclan</p> */}
                    
                </div>
            </div>


        </>

    );
}

export default Cv;