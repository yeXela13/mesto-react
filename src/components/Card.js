function Card({card, onCardClick}) {
    function handleCardClick() {
        onCardClick(card);
    };

    return (
        
            <li className="element__item">
                <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
                <button className="element__delete-button" type="button"></button>
                <div className="element__caption">
                    <h2 className="element__text">{card.name}</h2>
                    <div className="element__like-container">
                        <button className="element__like" type="button"></button>
                        <p className="element__like-sum">{card.likes.length}</p>
                    </div>
                </div>
            </li>
     
    );
}

export default Card;