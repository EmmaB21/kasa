// import '../style/pages/home.css'
import Banner from '../components/Banner'
import img from '../assets/AboutBanner.jpg'
import '../style/components/banner.css'

function About() {
    return (
        <div className='page__ctn'>
            < Banner  image={img} ClassHeightBanner={"aboutBanner"} />
            <h1>A propos</h1>
        </div>
    )
}

export default About