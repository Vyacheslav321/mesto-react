import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [picName, setPicName] = React.useState();
  const [picUrl, setPicUrl] = React.useState();

  function handleChangePicName(e) {
    setPicName(e.target.value);
  }

  function handleChangePicUrl(e) {
    setPicUrl(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: picName,
      link: picUrl,
    });
  }

  return (
    <PopupWithForm
      name='edit-pic'
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      {/* <children> */}
      <div className="popup__block">
        <input
          onChange={handleChangePicName}
          id="picName"
          className="popup__input popup__input_type_picname"
          type="text"
          name="picName"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="picName-error" className="error"></span>
      </div>
      <div className="popup__block">
        <input
          onChange={handleChangePicUrl}
          id="picURL"
          className="popup__input popup__input_type_picurl"
          type="url"
          name="picURL"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="picURL-error" className="error"></span>
      </div>
      {/* </children> */}
    </PopupWithForm>
  );
}

export default AddPlacePopup;
