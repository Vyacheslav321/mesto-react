function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_bigpicture ${props.card.link && "popup_opened"}`}
      onClick={props.onClose}
    >
      <div className="popup__container popup__container_type_picture">
        <button
          className="popup__close-button popup__close-button_type_picture"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__picture"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup__text">{props.card.name}</p>
      </div>
    </section>
  );
}
export default ImagePopup;
