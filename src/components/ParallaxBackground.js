import React, { useEffect } from 'react';
import './ParallaxBackground.css';

function ParallaxBackground() {
    function multipleBoxShadow(n) {
        let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${randomColor()}`;
        for (let i = 2; i <= n; i++) {
            value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${randomColor()}`;
        }
        return value;
    }

    function randomColor() {
        let value = "black";
        const randomNum = Math.floor(Math.random() * 5) + 1;
        if (randomNum === 1) {
            value = "#DAF7A6";
        } else if (randomNum === 2) {
            value = "#FFC300";
        } else if (randomNum === 3) {
            value = "#FF5733";
        } else if (randomNum === 4) {
            value = "#82E0AA";
        } else {
            value = "#85C1E9";
        }
        return value;
    }

    useEffect(() => {
        const stars1 = document.querySelector("#stars1");
        const stars2 = document.querySelector("#stars2");
        const stars3 = document.querySelector("#stars3");
        stars1.style.boxShadow = multipleBoxShadow(700);
        stars2.style.boxShadow = multipleBoxShadow(200);
        stars3.style.boxShadow = multipleBoxShadow(100);
    }, []);

    return (
        <div className="parallax">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
    );
}

export default ParallaxBackground;
