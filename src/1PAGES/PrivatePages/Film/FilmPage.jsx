import cl from "./FilmPage.module.css";
const FilmPage = () => {
    return (
        <div className={cl.container}>
            <div className={cl.imgContainer}>
                <img src="https://images.iptv.rt.ru/images/c6u842jir4ssllttuk1g.jpg" alt="" />
            </div>
            <div>
                Фильмы
                |
                [Название фильма]    
            </div>
            <div className={cl.contentContainer}>
                <div>[Название фильима] [рейтинг]</div>
                <div>[жанр: комедия]</div>
                <div>[Кнопка смотреть фильм]</div>
            </div>
            <div>[Кнопка добавить в избранное]</div>
        </div>
    );
};

export default FilmPage;