
import cl from "./Card.module.css"



const Card = ({ img, title, inSub }) => {
    return ( 
        <div className={cl.cardWrapper}>
            <div className={cl.imgWrapper}>
                <img src={img} alt="card-img" className={cl.img}/>
            </div>
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