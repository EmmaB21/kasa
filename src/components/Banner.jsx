import '../style/components/banner.css'

function Banner({ image, text, ClassHeightBanner }) {
    return (
        <div className={`banner ${ClassHeightBanner}`}>
            <img className='banner__img' src={image} alt='Bannière' />
            <h1 className='banner__txt'>{text}</h1>
        </div>
    )
}

export default Banner
