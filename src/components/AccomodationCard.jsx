import Collapse from "./Collapse"
import Rating from "./Rating"
import "../style/components/accomodationCard.css"


function AccomodationCard({ accomodation }) {
    return (
        <div className="accomodationCard">

            <div className="card__info">
                <div className="card__locationInfo">
                    <div className="card__title">
                        <h2>{accomodation.title}</h2>
                        <p>{accomodation.location}</p>
                    </div>
                    <div className="card_tags">
                        <ul>
                            {accomodation.tags.map((tag, index) => (
                                <li key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="card__hostInfo">
                    <div className="card__host">
                        <img src={accomodation.host.picture} alt="hôte" />
                        <p>{accomodation.host.name}</p>
                    </div>
                    <div className="card_rate">
                        < Rating rate={accomodation.rating} rateMax={5} />
                    </div>
                </div>
            </div>

            <div className="card_collapses">
                <Collapse
                    ClassAccomodationCollapse={"accomodationCollapse"}
                    title="Description"
                    text={accomodation.description} />
                <Collapse
                    ClassAccomodationCollapse={"accomodationCollapse"}
                    title="Équipements"
                    text={<ul>
                        {accomodation.equipments.map((equipment, index) => (
                            <li key={index}>
                                {equipment}
                            </li>
                        ))}
                    </ul>} />
            </div>
        </div>

    )
}

export default AccomodationCard