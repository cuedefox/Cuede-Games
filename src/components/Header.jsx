import { React, useState } from "react";
import logo from "../assets/logo.svg";
import {Link} from "react-router-dom";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [linkActive, setLinkActive] = useState("inicio");

    const desplegarMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return <>
        <nav className="menu">
            <Link className="logo" to={"/"} >
                <img src={logo} alt="logo de Cuede Games" />
                <h2>Cuede Games</h2>
            </Link>
            <ul className={mobileMenu ? "menu-items show" : "menu-items"}>
                <li><Link className={linkActive == "inicio" ? "active" : null} onClick={() => setLinkActive("inicio")} to={"/"}>Inicio</Link></li>
                <li><Link className={linkActive == "juegos" ? "active" : null} onClick={() => setLinkActive("juegos")} to={"/Juegos"}>Juegos</Link></li>
                <li><Link className={linkActive == "noticias" ? "active" : null} onClick={() => setLinkActive("noticias")} to={"/noticias"}>Noticias</Link></li>
                <li><Link className={linkActive == "sobre" ? "active" : null} onClick={() => setLinkActive("sobre")} to={"/sobre-nosotros"}>Sobre Nosotros</Link></li>
            </ul>
            <div className="menu-bars" onClick={desplegarMenu}>
                <span className={mobileMenu ? "activelinea1-menu-bar" : "linea1-menu-bar"}></span>
                <span className={mobileMenu ? "activelinea2-menu-bar" : "linea2-menu-bar"}></span>
                <span className={mobileMenu ? "activelinea3-menu-bar" : "linea3-menu-bar"}></span>
            </div>
        </nav>
    </>
}

export default Header;