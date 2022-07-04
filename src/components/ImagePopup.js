function ImagePopup() {

  return (
    <section className="popup popup_type_bigpicture">
      <div className="popup__container popup__container_type_picture">
        <button className="popup__close-button popup__close-button_type_picture" type="button" aria-label="Закрыть"></button>
        <img className="popup__picture" src="<%=require('./images/elements__like_unactive.svg')%>" alt="Картинка" />
        <p className="popup__text"></p>
      </div>
    </section>
  )
};
export default ImagePopup;