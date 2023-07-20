import arrow_left from "../assets/arrow_left.png"
import arrow_right from "../assets/arrow_right.png"
import { useState } from "react"
import "../style/components/slideshow.css"

function Slideshow({ accomodation }) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
    const previousPic = () => { setCurrentPictureIndex(currentPictureIndex === 0 ? accomodation.pictures.length - 1 : currentPictureIndex - 1) }
    const nextPic = () => { setCurrentPictureIndex(currentPictureIndex === accomodation.pictures.length - 1 ? 0 : currentPictureIndex + 1) }

    return (
        <div className="slideshow">
            <img className="slideshow__img" src={accomodation.pictures[currentPictureIndex]} alt="" />
            {accomodation.pictures.length === 1 ? null : (
                <div>
                    <img onClick={() => previousPic()}
                        className="slideshow__arrow arrow--left"
                        src={arrow_left}
                        alt="Précédente" />
                    <p className="slideshow__count">
                        {currentPictureIndex + 1}/{accomodation.pictures.length}
                    </p>
                    <img onClick={() => nextPic()}
                        className="slideshow__arrow arrow--right"
                        src={arrow_right}
                        alt="Suivante" />
                </div>
            )}
            {/* <img onClick={() => previousPic()}
                className={accomodation.pictures.length === 1 ? "hidden" : "slideshow__arrow arrow--left"}
                src={arrow_left}
                alt="Précédente" />

            <p className={accomodation.pictures.length === 1 ? "hidden" : "slideshow__count"}>
                {currentPictureIndex + 1}/{accomodation.pictures.length}
            </p>
            <img onClick={() => nextPic()}
                className={accomodation.pictures.length === 1 ? "hidden" : "slideshow__arrow arrow--right"}
                src={arrow_right}
                alt="Suivante" /> */}

        </div>
    )
}

export default Slideshow