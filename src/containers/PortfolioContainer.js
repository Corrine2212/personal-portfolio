import React from 'react';
import WelcomeLanding from '../components/WelcomeLanding';
import About from '../components/About';
import ProjectsList from '../components/ProjectsList';
import Contact from '../components/Contact';
import ParallaxBackground from '../components/ParallaxBackground';



const PortfolioContainer = () => {
    return (
        <>
            <ParallaxBackground />

            <section id='WelcomeLanding'>
                <WelcomeLanding />
            </section>

            <section id='About'>
                <About />
            </section>

            <section id='Projects'>
                <ProjectsList />
            </section>

            <section id='Contact'>
                <Contact />
            </section>
        </>
    )
}

export default PortfolioContainer;