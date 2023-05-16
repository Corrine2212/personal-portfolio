import React, { useState, useEffect } from "react";
import WelcomeLanding from '../components/WelcomeLanding';
import About from '../components/About';
import ProjectsList from '../components/ProjectsList';
import Cv from '../components/Cv';
import Contact from '../components/Contact';
import ParallaxBackground from '../components/ParallaxBackground';

import './PortfolioContainer.css'


const PortfolioContainer = () => {

    const [visibleTags, setVisibleTags] = useState([]);

    useEffect(() => {
        function handleScroll() {
            const pageTop = window.pageYOffset;
            const pageBottom = pageTop + window.innerHeight;
            const tags = document.querySelectorAll(".tag");

            const visible = [];
            tags.forEach((tag) => {
                if (tag.offsetTop < pageBottom) {
                    visible.push(tag);
                }
            });

            setVisibleTags(visible);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <ParallaxBackground />

            <section className={`welcomelanding`}>
                <WelcomeLanding />
            </section>

            <section className={`tag about ${visibleTags.includes(document.querySelector(".about")) ? "visible" : ""}`}>
                <About />
            </section>

            <section className={`tag projects ${visibleTags.includes(document.querySelector(".projects")) ? "visible" : ""}`}>
                <ProjectsList />
            </section>

            <section className={`tag cv ${visibleTags.includes(document.querySelector(".cv")) ? "visible" : ""}`}>
                <Cv />
            </section>

            <section className={`tag contact ${visibleTags.includes(document.querySelector(".contact")) ? "visible" : ""}`}>
                <Contact />
            </section>


        </>
    )
}

export default PortfolioContainer;
