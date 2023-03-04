function PopupWithForm({ title, name, children, textButton, isOpen, onClose }) {
    return (
        <div>
            <section className={`popap popap_${name} ${isOpen ? "popap_opened" : ""}`}>
                <div className="popap__container">
                    <h2 className="form__title">{title}</h2>
                    <button aria-label="сlose" className="popap__close" type="button" onClick={onClose}></button>
                    <form className={`form form_${name}`} name={`${name}`} noValidate>
                        {children}
                        <button aria-label="submit" className="form__button" type="submit">{textButton}</button>
                    </form>
                </div>
            </section>

            {/*
                <section class="popap popap_edit-profile">
        <div class="popap__container">
            <button aria-label="сlose" class="popap__close" type="button"></button>
            <form class="form form_edit" name="popap-form" novalidate>
                <h2 class="form__title">Редкатировать профиль</h2>
                <input id="input-name" name="name" class="form__textarea form__textarea_profile_name" type="text"
                    placeholder="Имя" minlength="2" maxlength="40" required>
                <span id="input-name-error" class="form__span form__span_active"></span>
                <input id="input-post" name="post" class="form__textarea form__textarea_profile_post" type="text"
                    placeholder="О себе" minlength="2" maxlength="200" required>
                <span id="input-post-error" class="form__span form__span_active"></span>
                <button aria-label="submit" class="form__button" type="submit">Сохранить</button>
            </form>
        </div>
    </section>
            <section className="popap popap_add-card">
                <div className="popap__container">
                    <button aria-label="close" className="popap__close" type="button"></button>
                    <form className="form form-item" name="popap-item-form" noValidate>
                        <h2 className="form-item__title">Новое место</h2>
                        <input id="input-place" name="name" className="form__textarea form__textarea_element_name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
                        <span id="input-place-error" className="form__span form__span_active"></span>
                        <input id="input-url" name="link" className="form__textarea form__textarea_element_url" type="url" placeholder="Ссылка на картинку" required />
                        <span id="input-url-error" className="form__span form__span_active"></span>
                        <button aria-label="submit" className="form__button" type="submit">Создать</button>
                    </form>
                </div>
            </section>

            <section className="popap popap_delete-card">
                <div className="popap__delete-container">
                    <form className="form form_delete" name="popap-delete-form" noValidate>
                        <button className="popap__close" type="button"></button>
                        <h2 className="form__title">Вы уверены?</h2>
                        <button aria-label="submit" className="form__button" type="submit">Да</button>
                    </form>
                </div>
            </section>

            <section className="popap popap_avatar">
                <div className="popap__avatar-container">
                    <button className="popap__close" type="button"></button>
                    <form className="form form_avatar" name="popap-avatar-form" noValidate>
                        <h2 className="form__title">Обновить аватар</h2>
                        <input id="input-avatar" name="avatar" className="form__textarea form__textarea_popap_avatar" type="url"
                            placeholder="Ссылка на Ваш аватар" minLength="2" required />
                        <span id="input-avatar-error" className="form__span form__span_active"></span>
                        <button aria-label="submit" className="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </section> */}
        </div>
    );
}

export default PopupWithForm;