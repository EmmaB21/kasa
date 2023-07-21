import '../style/components/rating.css'
// import star from "../assets/star.svg"

function Rating({ rate, rateMax }) {

    const stars = [];
    for (let i = 1; i <= rateMax; i++) {
        const starClass = i <= rate ? 'pleine' : 'vide';
        stars.push
        (<i key={i} className={`fa-solid fa-star fa-2x star ${starClass}`}></i>)
    }
    return (
        <div className="rating">
            {stars}
        </div>
    );
};

export default Rating
