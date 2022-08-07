import PopupWithForm from "./popupWithForn";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit-bio"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
        <children>
          <div className="popup__block">
            <input
              id="popupName"
              className="popup__input popup__input_type_name"
              type="text"
              name="name"
              minlength="2"
              maxlength="40"
              required
              autofocus
            />
            <span id="popupName-error" className="error"></span>
          </div>
          <div className="popup__block">
            <input
              id="popupWork"
              className="popup__input popup__input_type_work"
              type="text"
              name="about"
              minlength="2"
              maxlength="200"
              required
            />
            <span id="popupWork-error" className="error"></span>
          </div>
        </children>
    </PopupWithForm>
  );
}

export default EditProfilePopup