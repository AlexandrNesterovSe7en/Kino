
import cl from "./Card.module.css"



const Card = ({ img, title }) => {
    return ( 
        <div className={cl.cardWrapper}>
            <div className={cl.imgWrapper}>
                <img src={img} alt="card-img" className={cl.img}/>
            </div>
            <div className={cl.cardDescWrapper}>
                <h4>{title}</h4>
                <p className={cl.inSubscribe}>В подписке</p>
            </div>
        </div>
     );
}
 
export default Card;