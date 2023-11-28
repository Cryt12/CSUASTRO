import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo.png';
import '../Styles/main.css';

function NavBar() {
    const navRef = useRef();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header style={{ top: visible ? '0' : '-140px' }} className="navbar-container">
            <img src={logo} alt="Logo" className="Logo" />
            <nav ref={navRef} className={menuOpen ? 'responsive_nav' : ''}>
                <NavLink to="/home" activeClassName="active">HOME</NavLink>
                <NavLink to="/news" activeClassName="active">NEWS</NavLink>
                <NavLink to="/science" activeClassName="active">SCIENCE</NavLink>
                <NavLink to="/observing" activeClassName="active">OBSERVING</NavLink>
                <NavLink to="/spaceflight" activeClassName="active">SPACEFLIGHT</NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;
