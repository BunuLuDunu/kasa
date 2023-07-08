import { NavLink } from "react-router-dom"
import Logo from '../../assets/logo.png'
import '../Header/header.scss'

function Header() {
    return (
        <header>
            <div className="header-wrapper">
                <NavLink to="/">
                    <img src={Logo} alt="Kasa logo"/>
                </NavLink>
                <nav>
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