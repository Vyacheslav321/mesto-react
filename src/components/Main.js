import App from "./App";

function Main(props) {
	// function handleEditAvatarClick() {
	// 	const popupElementAvatar = document.querySelector('.popup_type_avatar');
	// 	popupElementAvatar.classList.add("popup_opened");
	// };

	// function handleEditProfileClick() {
	// 	const popupElementName = document.querySelector(".popup_type_edit-bio");
	// 	popupElementName.classList.add("popup_opened");
	// };

	// function handleAddPlaceClick() {
	// 	const popupElementPic = document.querySelector(".popup_type_edit-pic");
	// 	popupElementPic.classList.add("popup_opened");
	// };

	return (
		<main>
			<section className="profile">
				<div className="profile__avatar-block">
					<img className="profile__avatar" src="#" alt="аватар" />
					<button className="profile__button-avatar" type="button" aria-label="Аватар" onClick={props.onEditAvatar}></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name"></h1>
					<button className="profile__button-edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
					<p className="profile__work"></p>
				</div>
				<button className="profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
			</section>

			<section className="elements"></section>
		</main>
	)
};
export default Main;
