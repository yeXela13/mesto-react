import '../index.css';
import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState, useEffect } from 'react';
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData);
                setCards(cardsData);
            })
            .catch((res) => console.log(res));
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((res) => console.log(res));
    }

    function handleCardDelete(card) {
        console.log('попап удаляем?')
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));

            })
            .catch((res) => console.log(res));
    }

    function handleUpdateUser(data) {
        console.log('profile')
        api.setUserInfo(data)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((res) => console.log(res));
    }

    function handleUpdateAvatar(data) {
        console.log('avatar')
        api.setUserAvatar(data)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((res) => console.log(res));
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    cards={cards}
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />
                {/* попап добавить карточку */}
                <PopupWithForm
                    name="AddPlace"
                    title="Новое место"
                    textButton="Создать"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input
                        id="input-place"
                        name="name"
                        type="text"
                        className="form__textarea form__textarea_element_name"
                        placeholder="Название"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <span id="input-place-error" className="form__span form__span_active" />
                    <input
                        id="input-url"
                        name="link"
                        type="url"
                        className="form__textarea form__textarea_element_url"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span id="input-url-error" className="form__span form__span_active" />
                </PopupWithForm>
                {/* попап удалить карточку */}
                <PopupWithForm
                    name="popap-delete-form"
                    title="Вы уверены?"
                    textButton="Да"
                    onClose={closeAllPopups}
                />
                {/* попап аватара */}
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar} />

                {/* попап с картинкой */}
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div >
        </CurrentUserContext.Provider>
    );
}

export default App;
