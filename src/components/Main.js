import Card from "./Card";

function Main(props) {
	const userName=props.currentUser.name
	const userDescription=props.currentUser.about
	const userAvatar=props.currentUser.avatar
	console.log("cvjnhbfvesfgsdgsfdgsdfgfsdgsdfgsdfgsdfg")
	console.log(userAvatar)

	// function handleClick() {
	// 	props.onCardClick(props.card);
	// }  

	return (
		<main>
			<section className="profile">
				<div className="profile__avatar-block">
					<img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt="аватар" />
					<button className="profile__button-avatar" type="button" aria-label="Аватар" onClick={props.onEditAvatar}></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<button className="profile__button-edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
					<p className="profile__work">{userDescription}</p>
				</div>
				<button className="profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
			</section>

			<section className="elements">
				{props.cards.map((card) => (
					<Card
							card={card}
							key={card._id}
							onCardClick={props.onCardClick}
							// onCardLike={props.onCardLike}
							// onCardDelete={props.onCardDelete}
					/>
        ))}
			</section>
		</main>
	)
};
export default Main;
