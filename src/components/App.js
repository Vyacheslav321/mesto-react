import React from 'react';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './popupWithForn';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

	function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
	};
	
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
	};
		
	function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
	};

  function handleCardClick() {
    setIsOpenPopup(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsOpenPopup(false);
  };

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <children >
          <div class="popup__block">
            <input id="avatar" class="popup__input popup__input_type_avatar" type="url" name="avatar"  placeholder="Ссылка на аватар" required />
            <span id="avatar-error" class="error"></span>
         </div>
        </children>
      </PopupWithForm>
      <PopupWithForm name='edit-bio' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <children >
          <div class="popup__block">
            <input id="popupName" class="popup__input popup__input_type_name" type="text" name="name" minlength="2" maxlength="40" required autofocus />
            <span id="popupName-error" class="error"></span>
          </div>
          <div class="popup__block">
            <input id="popupWork" class="popup__input popup__input_type_work" type="text" name="about" minlength="2" maxlength="200" required />
            <span id="popupWork-error" class="error"></span>
          </div>
        </children>
      </PopupWithForm>
      <PopupWithForm name='edit-pic' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <children >
          <div class="popup__block">
            <input id="picName" class="popup__input popup__input_type_picname" type="text" name="picName" placeholder="Название" minlength="2" maxlength="30" required />
            <span id="picName-error" class="error"></span>
          </div>
          <div class="popup__block">
            <input id="picURL" class="popup__input popup__input_type_picurl" type="url" name="picURL"  placeholder="Ссылка на картинку" required />
            <span id="picURL-error" class="error"></span>
          </div>
        </children>
      </PopupWithForm>
      <ImagePopup isOpen={setIsOpenPopup} onClose={closeAllPopups}/>

    {/* <!-- POPUP name-work--> */}
      {/* <section className="popup popup_type_edit-bio">
        <div className="popup__container popup__container_type_input">
          <button className="popup__close-button popup__close-button_type_edit-bio" type="button" aria-label="Закрыть"></button>
          <form className="popup__form" name="edit-bio" novalidate>
            <h3 className="popup__header popup__header_type_input">Редактировать профиль</h3>
            <div className="popup__block">
              <input id="popupName" className="popup__input popup__input_type_name" type="text" name="name" minlength="2" maxlength="40" required autofocus />
              <span id="popupName-error" className="error"></span>
            </div>
            <div className="popup__block">
              <input id="popupWork" className="popup__input popup__input_type_work" type="text" name="about" minlength="2" maxlength="200" required />
              <span id="popupWork-error" className="error"></span>
            </div>
            <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
        </section> */}
    {/* <!-- POPUP add picture --> */}
        {/* <section className="popup popup_type_edit-pic">
          <div className="popup__container popup__container_type_input">
            <button className="popup__close-button popup__close-button_type_edit-pic" type="button" aria-label="Закрыть"></button>
            <form className="popup__form" name="edit-pic" novalidate>
              <h3 className="popup__header popup__header_type_input">Новое место</h3>
              <div className="popup__block">
                <input id="picName" className="popup__input popup__input_type_picname" type="text" name="picName" placeholder="Название" minlength="2" maxlength="30" required />
                <span id="picName-error" className="error"></span>
              </div>
              <div className="popup__block">
                <input id="picURL" className="popup__input popup__input_type_picurl" type="url" name="picURL"  placeholder="Ссылка на картинку" required />
                <span id="picURL-error" className="error"></span>
              </div>
              <button className="popup__save-button" type="submit" aria-label="Сохранить">Создать</button>
            </form>
        </div>
      </section> */}
    {/* <!-- POPUP full photo --> */}
      {/* <section className="popup popup_type_bigpicture">
        <div className="popup__container popup__container_type_picture">
          <button className="popup__close-button popup__close-button_type_picture" type="button" aria-label="Закрыть"></button>
          <img className="popup__picture" src="<%=require('./images/elements__like_unactive.svg')%>" alt="Картинка" />
          <p className="popup__text"></p>
        </div>
      </section> */}
    {/* <!-- POPUP del photo --> */}
      {/* <section className="popup popup_type_delete">   */}
       {/* <!-- popup_opened--> */}
        {/* <div className="popup__container popup__container_type_input">
          <button className="popup__close-button popup__close-button_type_delete" type="button" aria-label="Закрыть"></button>
          <form className="popup__form" name="delete" novalidate>
            <h3 className="popup__header popup__header_type_confirm">Вы уверены?</h3>
            <button className="popup__save-button" type="submit" aria-label="Удалить">Да</button>
          </form>
        </div>
      </section> */}
    {/* <!-- POPUP avatar --> */}
    {/* <section className="popup popup_type_avatar">
      <div className="popup__container popup__container_type_input">
        <button className="popup__close-button popup__close-button_type_avatar" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" name="avatar" novalidate>
          <h3 className="popup__header popup__header_type_input">Обновить аватар</h3>
          <div className="popup__block">
            <input id="avatar" className="popup__input popup__input_type_avatar" type="url" name="avatar"  placeholder="Ссылка на аватар" required />
            <span id="avatar-error" className="error"></span>
          </div>
          <button className="popup__save-button" type="submit" aria-label="Создать">Сохранить</button>
        </form>
    </div>
    </section> */}
    {/* <!-- TEMPLATE --> */}
      <template id="card-template">
        <div className="element">
          <img className="element__pic" src="#" alt="Картинка" />
          <div className="element__trash"></div>
          <div className="element__description">
            <h2 className="element__text"></h2>
            <div className="element__like-wrapper">
              <button className="element__like "></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
