import { useEffect, useState } from "react";
import MainModal from "../../2MODULES/Modal/MainModal/MainModal";
import MainButton from "../../4UI/Buttons/MainButton/MainButton";
import cl from "./InfoAboutSubscribe.module.css";


const InfoAboutSubscribe = () => {
    const [isActive, setIsActive] = useState(false);

    function handleToggleActive(){
        setIsActive(prev => !prev)
    }

    useEffect(() => {
        if (isActive) {
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
        } else{
            document.body.style.height = null;
            document.body.style.overflow = null;
        }
        return () => {
            document.body.style.height = null;
            document.body.style.overflow = null;
        }
    }, [isActive])

    return (
        <div className={cl.accessWrapper}>
            <h1 className={cl.accessText}>
                Получите доступ ко всем премиум фильмам
                и сериалам всего за 149₽
            </h1>
            <MainButton onClick={() => setIsActive(prev => !prev)}>Подписаться</MainButton>
            <MainModal onClickCallback={handleToggleActive} className={isActive ? cl.active : undefined} text="Спасибо за подписку!" />
        </div>
    )
}

export default InfoAboutSubscribe;