import React from 'react';
import './Cv.css';

const Experience = () => {
    return (

        <>
            <div className="experience-container">
                <h3>Experience</h3>

                <div className='experience-detail'>
                    <div className='experience-item'>
                        <h4>CodeClan - Professional Software Development</h4>
                        <p>SQA - Professional Development Award Mar 2023 - July 2023</p>
                        <p>- Accredited Software Development Bootcamp teaching Python, JavaScript, React, Java, Spring, SQL, MongoDB, Flask, and Express.js</p>
                        <p>- Designed and programmed a solo full-stack Python project, a group full-stack JS & React project, and a group capstone full-stack Java & React project</p>
                    </div>
                    <div className='experience-item'>
                        <h4>Vision2Learn - Introductory course to Code</h4>
                        <p>SQA - Professional Development Award Mar 2023 - July 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;