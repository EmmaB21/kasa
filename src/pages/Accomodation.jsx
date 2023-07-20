import Slideshow from '../components/Slideshow'
import AccomodationCard from '../components/AccomodationCard'
import data from '../data/data.json'
import { Navigate, useParams } from 'react-router-dom'
import "../style/pages/accomodation.css"

function Accomodation() {
    const { id } = useParams()
    const accomodation = data.find((accomodation) => accomodation.id === id)
    if (!accomodation) { return <Navigate to="404" /> }

    return (
        <div className='page__ctn'>
            <section className='accomodation__ctn'>
                <Slideshow accomodation={accomodation} />
                <AccomodationCard accomodation={accomodation} />
            </section>
        </div>
    )
}

export default Accomodation