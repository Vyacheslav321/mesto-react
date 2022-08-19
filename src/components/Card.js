import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "celement__trash_visible" : "element__trash_hidden"
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div id="card-template">
      <div className="element">
        <img
          className="element__pic"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        <div className={cardDeleteButtonClassName}></div>
        <div className="element__description">
          <h2 className="element__text">{props.card.name}</h2>
          <div className="element__like-wrapper">
            <button className={cardLikeButtonClassName}></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
