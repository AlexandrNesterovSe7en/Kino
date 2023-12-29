
import cl from "./Card.module.css"



const Card = ({ img, title }) => {
    return ( 
        <div>
            <img src={img} alt="card-img" className={cl.img}/>
            <h5>{title}</h5>
            <p>В подписке</p>
        </div>
     );
}
 
export default Card;