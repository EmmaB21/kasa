import '../style/pages/home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import img from '../assets/HomeBanner.jpg'
import data from '../data/data.json'

function Home() {
    return (
        <div className='page__ctn'>
            < Banner image={img} text="Chez vous, partout et ailleurs" />
            <section className='cards__ctn'>
                {data.map(card => (
                    <Card key={card.id} card={card} />
                ))}
            </section>
        </div>
    )
}

export default Home