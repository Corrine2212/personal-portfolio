import React from 'react';
import WelcomeLanding from '../components/WelcomeLanding';
import About from '../components/About';
import ProjectsList from '../components/ProjectsList';
import Cv from '../components/Cv';
import Contact from '../components/Contact';
import ParallaxBackground from '../components/ParallaxBackground';
import './PortfolioContainer.css'


const PortfolioContainer = () => {
    return (
        <>
            <ParallaxBackground />

            <section id='welcomelanding'>
                <WelcomeLanding />
            </section>

            <section id='about'>
                <About />
            </section>

            <section id='projects'>
                <ProjectsList />
            </section>

            <section id='cv'>
                <Cv />
            </section>

            <section id='contact'>
                <Contact />
            </section>
            
        </>
    )
}

export default PortfolioContainer;
