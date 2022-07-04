import React from "react";
function PopupWithForm(props) {

  return (
    <section className={`popup popup_type_${props.name} ` + (props.isOpen == true ? "popup_opened" : "")} onMouseDown={props.onClose}>
      <div className="popup__container popup__container_type_input">
        <button className={`popup__close-button popup__close-button_type_${props.name}`} type="button" aria-label="Закрыть" onMouseDown={props.onClose}></button>
        <form className="popup__form" name={`${props.name}`} novalidate>
          <h3 className="popup__header popup__header_type_input">{props.title}</h3>
          {props.children}
          {/* <div className="popup__block">
            <input id="popupName" className="popup__input popup__input_type_name" type="text" name="name" minlength="2" maxlength="40" required autofocus />
            <span id="popupName-error" className="error"></span>
          </div>
          <div className="popup__block">
            <input id="popupWork" className="popup__input popup__input_type_work" type="text" name="about" minlength="2" maxlength="200" required />
            <span id="popupWork-error" className="error"></span>
          </div> */}
          <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </section>
  )
};
export default PopupWithForm;