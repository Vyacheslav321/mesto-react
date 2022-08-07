function Card(props) {
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
        <div className="element__trash"></div>
        <div className="element__description">
          <h2 className="element__text">{props.card.name}</h2>
          <div className="element__like-wrapper">
            <button className="element__like "></button>
            <p className="element__like-counter">{props.card.like.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
