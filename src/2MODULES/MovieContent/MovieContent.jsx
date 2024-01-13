import cl from './MovieContent.module.css';
const MovieContent = ({ movieData }) => {

    console.log(movieData)
    return (
        <div className={cl.contentContainer}>
            <img className={cl.filmNamgeImg} src={movieData.titleImg} fetchpriority="high" alt="Film-Name" />
            <div>{movieData.rating}{movieData.year}</div>
            <div>[жанр: комедия]</div>
            <div>[Кнопка смотреть фильм]</div>
        </div>
    );
};

export default MovieContent;