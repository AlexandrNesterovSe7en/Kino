import cl from './Rating.module.css';

const Rating = ({ movieData }) => {

    return (
        <>
            <h2>Рейтинг</h2>
            <div className={cl.container}>
                <h3>
                    {movieData}
                </h3>
                <p>Оценка пользователей Wink</p>
            </div>
        </>
    );
};

export default Rating;