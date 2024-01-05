import cl from "./FilmPage.module.css";
const FilmPage = () => {
    return (
        <div className={cl.container}>
            <div className={cl.container__img}>
                <img className={cl.img} src="https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg" alt="" />
            </div>
        </div>
    );
};

export default FilmPage;