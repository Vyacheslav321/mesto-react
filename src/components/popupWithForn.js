function popupWithForm() {
    return (
        <section className="popup popup_type_edit-bio">
        <div className="popup__container popup__container_type_input">
          <button className="popup__close-button popup__close-button_type_edit-bio" type="button" aria-label="Закрыть"></button>
          <form className="popup__form" name="edit-bio" novalidate>
            <h3 className="popup__header popup__header_type_input">Редактировать профиль</h3>
            <div className="popup__block">
              <input id="popupName" className="popup__input popup__input_type_name" type="text" name="name" minlength="2" maxlength="40" required autofocus />
              <span id="popupName-error" className="error"></span>
            </div>
            <div className="popup__block">
              <input id="popupWork" className="popup__input popup__input_type_work" type="text" name="about" minlength="2" maxlength="200" required />
              <span id="popupWork-error" className="error"></span>
            </div>
            <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
        </section>
    )
};
export default popupWithForm;