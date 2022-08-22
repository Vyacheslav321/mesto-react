import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const urlAvatar = React.useRef();

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      avatar: urlAvatar.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      {/* <children> */}
        <div className="popup__block">
          <input
            ref = {urlAvatar}
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
