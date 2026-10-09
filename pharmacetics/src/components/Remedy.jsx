function Remedy({ remedy }) {
    return <div className="remedy-card ">
        <div className="remedy-card__image">
            <img src={remedy.image} alt={remedy.name} />
            <div className="remedy-card__content">
                <button className="request" onClick={onRequestClick}> Request </button>
            </div>
        </div>
    </div>
}