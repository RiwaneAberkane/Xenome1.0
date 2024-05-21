import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
            <div className="nav-left">
                <h1>XENOME</h1>
            </div>
            <div className="nav-right">
                <ul className={`header_link ${isMenuOpen ? "header_link--open" : ""}`}>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">À propos</a></li>
                    <li><a href="">Abonnements</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="black" />
            </div>
        </nav>
    );
};

export default Navbar;
