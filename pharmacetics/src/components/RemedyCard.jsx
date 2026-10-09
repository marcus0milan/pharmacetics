function RemedyCard({ remedy }) {
    function onRequestClick() {
        alert(`Request for ${remedy.name} has been sent!`);
    }

    return <div className="remedy-card ">
        <div className="remedy-card__image">
            <img src={remedy.image} alt={remedy.name} />
            <div className="remedy-card__content">
                <button className="request" onClick={onRequestClick}> Request </button>
            </div>
        </div>
        <div className="remedy-card__info">
            <h3>{remedy.name}</h3>
            <p>{remedy.description}</p>
        </div>
    </div>
}

export default RemedyCard