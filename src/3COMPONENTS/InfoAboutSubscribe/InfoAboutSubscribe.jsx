
import MainButton from "../../4UI/Buttons/MainButton/MainButton";
import cl from "./InfoAboutSubscribe.module.css";


const InfoAboutSubscribe = () => {
    return (
        <div className={cl.accessWrapper}>
            <h1 className={cl.accessText}>
                Получите доступ ко всем премиум фильмам 
                и сериалам всего за 149₽
            </h1>
            <MainButton>Подписаться</MainButton>
        </div>
    )
}

export default InfoAboutSubscribe;