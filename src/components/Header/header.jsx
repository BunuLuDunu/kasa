import { NavLink } from "react-router-dom"
import Logo from '../../assets/img/logo.png'
import '../Header/header.scss'

function Header() {
    return (
        <header>
            <div className="header-wrapper">
                {/* Lien de navigation intégré au Logo renvoyant vers la page d'accueil */}
                <NavLink className="header-logo" to="/">
                    <img src={Logo} alt="Kasa logo"/>
                </NavLink>
                <nav>
                    {/* Menu de navigation */}
                    <ul className="nav-menu">
                        <li><NavLink to="/" className="nav-link">Accueil</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">A propos</NavLink></li>
                    </ul>
                </nav>
            </div> 
        </header>
    )
}

export default Header