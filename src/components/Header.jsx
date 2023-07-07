import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            <Link to="/accomodation">Hébergements</Link>
        </nav>
    )
}

export default Header
