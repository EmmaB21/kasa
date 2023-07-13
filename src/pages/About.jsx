import '../style/pages/home.css'
import Banner from '../components/Banner'
import img from '../assets/AboutBanner.jpg'

function About() {
    return (
        <div className='home__ctn'>
            < Banner image={img} />
            <h1>A propos</h1>
        </div>
    )
}

export default About