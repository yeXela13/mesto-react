import '../index.css';
import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';


function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
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
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            {/* попап редакт профиль */}
            <PopupWithForm
                name="popap-form"
                title="Редактировать профиль"
                textButton="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    id="input-name"
                    name="name"
                    type="text"
                    className="form__textarea form__textarea_profile_name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required />
                <span id="input-name-error" className="form__span form__span_active" />
                <input
                    id="input-post"
                    className="form__textarea form__textarea_profile_post" type="text"
                    name="post"
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                    required />
                <span id="input-post-error" className="form__span form__span_active" />
            </PopupWithForm>
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
            <PopupWithForm
                name="popap-avatar-form"
                title="Обновить аватар"
                textButton="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    id="input-avatar"
                    name="avatar"
                    type="url"
                    className="form__textarea form__textarea_popap_avatar"
                    placeholder="Ссылка на Ваш аватар"
                    minLength="2"
                    required
                />
                <span id="input-avatar-error" className="form__span form__span_active" />
            </PopupWithForm>
            {/* попап с картинкой */}
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
        </div >
    );
}

export default App;
