import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  
  function handleChangeDescription(e) {
    setDescription (e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-bio"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
          <div className="popup__block">
            <input
              id="popupName"
              className="popup__input popup__input_type_name"
              type="text"
              name="name" 
              value={name}
              onChange = {handleChangeName}
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
              value={description}
              onChange = {handleChangeDescription}
              minLength="2"
              maxLength="200"
              required
            />
            <span id="popupWork-error" className="error"></span>
          </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup