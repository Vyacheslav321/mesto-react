import PopupWithForm from "./PopupWithForn";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
    >
      {/* <children> */}
        <div className="popup__block">
          <input
            id="avatar"
            className="popup__input popup__input_type_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          />
          <span id="avatar-error" className="error"></span>
        </div>
      {/* </children> */}
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
