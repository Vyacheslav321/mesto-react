function Main() {
    return (
        <main>
            {/* <!-- PROFILE --> */}
          <section className="profile">
            <div className="profile__avatar-block">
              <img className="profile__avatar" src="#" alt="аватар" />
              <button className="profile__button-avatar" type="button" aria-label="Аватар"></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button className="profile__button-edit" type="button" aria-label="Редактировать"></button>
              <p className="profile__work"></p>
            </div>
            <button className="profile__button-add" type="button" aria-label="Добавить"></button>
          </section>
          {/* <!-- ELEMENTS --> */}
          <section className="elements"></section>
        </main>
    )
};
export default Main;