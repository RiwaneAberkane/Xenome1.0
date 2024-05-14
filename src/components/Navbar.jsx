import "./Navbar.css"
import hamburger from "../assets/ham-menu.svg"
import close from "../assets/ham-menu-close.svg"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <h1>Xenome</h1>
            </div>
            <div className="nav-right">
                <ul className="header_link">
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">À propos</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

            <div className="header__main-ham-menu-cont">
                <img id="menu-icon" src={hamburger} alt="hamburger menu" className="header__main-ham-menu" />
                <img id="close-icon" src={close} alt="hamburger menu close" className="header__main-ham-menu-close d-none" />


            </div>


        </nav>
    );
}

export default Navbar;