import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={
        `popup popup_type_${props.name} ` +
        (props.isOpen === true ? "popup_opened" : "")
      }
    >
      <div className="popup__container popup__container_type_input">
        <button
          className={`popup__close-button popup__close-button_type_${props.name}`}
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          name={`${props.name}`}
          onSubmit={props.onSubmit}
          noValidate
        >
          <h3 className="popup__header popup__header_type_input">
            {props.title}
          </h3>
          {props.children}
          <button
            className="popup__save-button"
            type="submit"
            aria-label="Сохранить"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
