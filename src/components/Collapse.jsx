import { useState } from 'react';
import arrow_up from "../assets/arrow_up.png"
import arrow_down from "../assets/arrow_down.png"
import "../style/components/collapse.css"


function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleComponentOpening = () => {
        setIsOpen((open) => !open);
    };
    return (
        <div className="collapse">
            <div className='collapse__title__ctn'>
                <h3 className='collapse__title'>{title}</h3>
                <img onClick={handleComponentOpening}
                    className="collapse__arrow"
                    src={isOpen ? arrow_down : arrow_up} alt="flèche"
                />
            </div>
            <div className={`collapse__txt__ctn ${isOpen ? "" : "collapse__hiddenTxt"}`}>
                <div className='collapse__txt'>{text}</div>
            </div>
        </div>
    )
}

export default Collapse
