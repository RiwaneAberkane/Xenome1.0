import "./Navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <h1>Xenome</h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">À propos</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;