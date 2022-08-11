import PopupWithForm from "./PopupWithForn";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit-bio"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
        {/* <children> */}
          <div className="popup__block">
            <input
              id="popupName"
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              required
              autoFocus
            />
            <span id="popupName-error" className="error"></span>
          </div>
          <div className="popup__block">
            <input
              id="popupWork"
              className="popup__input popup__input_type_work"
              type="text"
              name="about"
              minLength="2"
              maxLength="200"
              required
            />
            <span id="popupWork-error" className="error"></span>
          </div>
        {/* </children> */}
    </PopupWithForm>
  );
}

export default EditProfilePopup