import logo from '../assets/logo-footer.png'
import '../style/layout/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img className='footer__logo' src={logo} alt='Logo Kasa' />
            <p className='footer__txt'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer