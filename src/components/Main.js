import { useState, useEffect } from "react";
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState(null);
    const [userDescription, setUserDescription] = useState(null);
    const [userAvatar, setUserAvatar] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
            .catch((res) => console.log(res));
    }, []);

    return (
        <div >
            <main className="main">
                <section className="profile">
                    <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}>
                        <img className="profile__avatar" src={userAvatar} alt="Ваш автар" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__container">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__post">{userDescription}</p>
                    </div>
                    <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                </section>
                <section className="elements">
                    <ul className="element">
                        {cards.map((card) => (
                            <Card card={card}
                                key={card._id}
                                onCardClick={onCardClick}
                            />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;