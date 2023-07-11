import img from '../assets/HomeBanner.jpg'
import '../style/components/banner.css'

function Banner() {
    return (
        <banner className= 'banner'>
    <img className= 'banner__img'src={img} alt='Bannière' />
    <h1 className='banner__txt'>Chez vous, partout et ailleurs</h1>
</banner>
    )
}

export default Banner
