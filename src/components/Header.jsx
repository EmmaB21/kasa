import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import '../style/layout/header.css'


function Header() {
    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt='Logo Kasa' />
            <nav>
                <ul className='navbar__links'>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default Header
