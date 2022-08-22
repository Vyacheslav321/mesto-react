import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardData]) => {
        // cardData.reverse();
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных ${err}`);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteUserCard(card._id)
      .then(() => {
        //копиюя массива за исключением удалённой карточки
        const newCards = cards.filter((c) => c._id !== card._id);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateUser(user) {
    api
      .setUserInfo(user.name, user.about)
      .then((userData) => {
        setCurrentUser({
          ...currentUser,
          name: userData.name,
          about: userData.about,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(user) {
    api.setAvatar(user.avatar)
      .then((userData) => {
        setCurrentUser({
          ...currentUser,
          avatar: userData.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard([]);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
