import PopupWithForm from "./popupWithForn";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="edit-pic"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <children>
        <div className="popup__block">
          <input
            id="picName"
            className="popup__input popup__input_type_picname"
            type="text"
            name="picName"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span id="picName-error" className="error"></span>
        </div>
        <div className="popup__block">
          <input
            id="picURL"
            className="popup__input popup__input_type_picurl"
            type="url"
            name="picURL"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="picURL-error" className="error"></span>
        </div>
      </children>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
