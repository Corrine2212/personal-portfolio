import React from 'react';
import Project from './Project'
import './ProjectsList.css'

const ProjectsList = () => {
    return (
        <>
            <div className="projects-container">
                <h2 className='projects-title'>Projects</h2>
                <Project />
            </div>
        </>
    );
}

export default ProjectsList;