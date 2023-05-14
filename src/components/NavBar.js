import React, { useState, useEffect } from 'react';
import './NavBar.css'


const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('#navbar-wrapper');
        const top = navbar.offsetTop;

        const handleScroll = () => {
            if (window.scrollY >= top) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="navbar-wrapper" className={isSticky ? 'sticky' : ''}>
            <div className='logo-wrapper'>
                <p className='logo'>CS.</p>
            </div>
            <div className='nav'>
                <p className='nav-items'>About</p>
                <p className='nav-items'>Projects</p>
                <p className='nav-items'>CV</p>
                <p className='nav-items'>Contact</p>
            </div>
        </div>
    )
}

export default NavBar;