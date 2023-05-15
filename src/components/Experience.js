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
                        <p><b>SQA - Professional Development Award  |  Mar 2023 - July 2023</b></p>
                        <p>- Accredited Software Development Bootcamp teaching Python, JavaScript, React, Java, Spring, SQL, MongoDB, Flask, and Express.js</p>
                        <p>- Designed and programmed a solo full-stack Python project, a group full-stack JS & React project, and a group capstone full-stack Java & React project</p>
                    </div>
                    <div className='experience-item'>
                        <h4>Vision2Learn - Understanding Coding</h4>
                        <p><b>NCFE Lv 2 Certificate in Understanding Coding  |  June 2022 - Oct 2022</b></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;