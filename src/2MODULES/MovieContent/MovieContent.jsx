import MainButton from '../../4UI/Buttons/MainButton/MainButton';
import cl from './MovieContent.module.css';
const MovieContent = ({ movieData }) => {
    const categories = movieData.categories ? Object.keys(movieData.categories).join(', ') : '';

    return (
        <>
            <div className={cl.contentContainer}>
                {
                    movieData.titleImg ?
                    <img className={cl.filmNamgeImg} src={movieData.titleImg} fetchpriority="high" alt="Film-Name" />
                    :
                    <h2>{movieData.title}</h2>
                }
                <div className={cl.rating}>
                    <span>
                        {
                            movieData.rating === "" ? null :
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                                {movieData.rating}
                            </>
                        }
                    </span>
                    {movieData.year}
                </div>
                <div className={cl.characteristic}>
                    {categories} | {movieData.time} | {movieData.ageLimit}
                </div>
                <div>
                    {movieData.desc}
                </div>
                <MainButton className={cl.button}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.3845 22.9934C12.2569 22.9978 12.1287 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 15.7203 21.1531 19.0093 18.3262 21H22.5C23.0523 21 23.5 21.4477 23.5 22C23.5 22.5523 23.0523 23 22.5 23H12.5C12.4609 23 12.4224 22.9978 12.3845 22.9934ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19ZM7 10C8.10457 10 9 10.8954 9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10ZM19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14C18.1046 14 19 13.1046 19 12Z" fillRule="evenodd" clipRule="evenodd"></path></svg>Смотреть трейлер</MainButton>
            </div>
        </>
    );
};

export default MovieContent;