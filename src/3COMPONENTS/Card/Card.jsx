
import { Link } from "react-router-dom";
import cl from "./Card.module.css"



const Card = ({ img, title, inSub, rating, uid }) => {


    return (
        <div className={cl.cardWrapper}>
            {/* Отображение рейтинга и картинки */}
            <div className={cl.imgWrapper}>
                {
                    rating ?
                    <span>★ {rating.toString().length === 1 ? rating + ".0" : rating}</span>
                    :
                    <></>
                }
                <Link to={`/FilmPage/${uid}`}>
                    <img src={img} alt="card-img" className={cl.img} />
                </Link>
            </div>

            {/* Отображение названия фильма и его состояние */}
            <div className={cl.cardDescWrapper}>
                <div className={cl.titleWrapper}>
                    <div className={cl.titleShadow}></div>
                    <h4>{title}</h4>
                </div>
                <p className={cl.inSubscribe}>{inSub ? "В подписке" : "Бесплатно"}</p>
            </div>
        </div>
    );
}

export default Card;