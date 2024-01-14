import { useEffect, useState } from "react";
import MainModal from "../../2MODULES/Modal/MainModal/MainModal";
import MainButton from "../../4UI/Buttons/MainButton/MainButton";
import cl from "./InfoAboutSubscribe.module.css";
import { auth, database } from "../../FireBase/FireBase";
import { get, onValue, ref, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribe } from "../../features/currentUserSlice/currentUserSlice";


const InfoAboutSubscribe = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSub, setIsSub] = useState(false);
    const currentUser = useSelector(state => state.currentUser.user);
    const dispatch = useDispatch()


    function handleToggleActive() {
        if (currentUser) {
            dispatch(setSubscribe(true))
            setIsActive(prev => !prev)
            set(ref(database, `Users/${auth.currentUser.uid}/isSubscribe`), true)
            get(ref(database, `Users/${auth.currentUser.uid}/isSubscribe`)).then(snapshot => {
                setIsSub(snapshot.val());
            })
        }
    }

    useEffect(() => {
        if (currentUser) {
            get(ref(database, `Users/${auth.currentUser.uid}/isSubscribe`)).then(snapshot => {
                setIsSub(snapshot.val());
            })
        }
    }, [])

    useEffect(() => {
        if (isActive) {
            document.body.style.height = '100vh'
            document.body.style.overflow = 'hidden'
        } else {
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
            {
                isSub ?

                    <div className={cl.infoWrapper}>
                        <h1 className={cl.accessText}>
                            Вам доступны лучшие сериалы и фильмы
                        </h1>
                        <MainModal onClickCallback={handleToggleActive} className={isActive ? cl.active : undefined} text="Спасибо за подписку!" />
                    </div>
                    :
                    <div className={cl.infoWrapper1}>
                        <h1 className={cl.accessText}>
                            Получите доступ ко всем премиум фильмам
                            и сериалам всего за 149₽
                        </h1>
                        <MainButton onClick={() => handleToggleActive()}>Подписаться</MainButton>
                    </div>


            }
        </div>
    )
}

export default InfoAboutSubscribe;