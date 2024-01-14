import { useEffect, useState } from "react";
import { auth, database } from "../../../FireBase/FireBase";
import cl from "./ProfilePage.module.css";
import { get, ref, update } from "firebase/database";
import { GoogleAuthProvider, deleteUser, reauthenticateWithRedirect, signOut } from "firebase/auth";
import done from "../../../4UI/Img/done.png";
import { useDispatch, useSelector } from "react-redux";
import { setSubscribe } from "../../../features/currentUserSlice/currentUserSlice";



const ProfilePage = () => {

    const [isSubscribe, setIsSubscribe] = useState(false)
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputSurname] = useState("");
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();
    const isSub = useSelector(state => state.currentUser.isSubscribe)


    useEffect(() => {
        get(ref(database, `Users/${auth.currentUser.uid}/isSubscribe`))
            .then(snap => {
                setIsSubscribe(snap.val())
        })
        get(ref(database, `Users/${auth.currentUser.uid}/Name`))
            .then(snap => {
                setName(snap.val())
            })
        get(ref(database, `Users/${auth.currentUser.uid}/Surname`))
            .then(snap => {
                setSurname(snap.val())
            })
        get(ref(database, `Users/${auth.currentUser.uid}/Email`))
            .then(snap => {
                setEmail(snap.val())
            })
        
    })

    function logOut() {
        // Отвечает за выход из аккаунта
        signOut(auth).then(() => {

        }).catch(err => {
            console.log(err);
        })
    }

    async function deleteAccount() {

        const provider = new GoogleAuthProvider();

        await reauthenticateWithRedirect(auth.currentUser, provider);
        deleteUser(auth.currentUser);

        update(ref(database, `Users`), {
            [auth.currentUser.uid]: null
        }).then(() => {
            console.log("Аккаунт удален успешно");
        })
    }

    function setNameInDB() {
        if(inputName) {
            setName(inputName)
            update(ref(database, `Users/${auth.currentUser.uid}`), {
                Name: inputName
            }).then(() => {
                console.log("Имя успешно обновлено");
            })
        }
    }

    function setSurnameInDB() {
        if(inputSurname) {
            setSurname(inputSurname)
            update(ref(database, `Users/${auth.currentUser.uid}`), {
                Surname: inputSurname
            }).then(() => {
                console.log("Фамилия успешно обновлена");
            })
        }
    }

    function cancelSub() {
        dispatch(setSubscribe(false))
        update(ref(database, `Users/${auth.currentUser.uid}`), {
            isSubscribe: false
        }).then(() => {
            console.log("Подписка успешно отменена", isSub);
        })
    }
    
    return (
        <div className={cl.wrapper}>
            <div className={cl.container} style={{borderColor: isSubscribe || isSub ? "#1D79D2" : "grey", boxShadow: isSubscribe || isSub ? "0 0 7px #1D79D2" : "0 0 0"}}>
                <div className={cl.userInfo}>
                    <div className={cl.profileImgWrapper}>
                        <div className={cl.imgBorder} 
                                style={{borderColor: isSubscribe || isSub? "#1D79D2" : "grey", boxShadow: isSubscribe || isSub ? "0 0 7px #1D79D2" : "0 0 0"}}>
                            <div className={cl.profileImg}>{
                                !name && !surname && email ? email[0].toUpperCase() :
                                name && !surname ? name[0].toUpperCase() :
                                !name && surname ? surname[0].toUpperCase() :
                                name && surname ? name[0].toUpperCase() + surname[0].toUpperCase() :
                                email && email[0].toUpperCase()
                            }</div>
                        </div>
                    </div>
                    <div className={cl.infoWrapper}>
                        <h2>Информация об аккаунте</h2>
                        <div className={cl.info}>
                            <div className={cl.infoString}>
                                <label>Имя: </label>
                                <div className={cl.inputWrapper}>
                                    {
                                        name ? <p>{name}</p> : 
                                        <>
                                            <input type="text" placeholder="Введите ваше имя" onChange={(e) => setInputName(e.target.value)}/>
                                            <button onClick={setNameInDB}>
                                                <img className={cl.done} src={done} alt="done" />
                                            </button>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className={cl.infoString}>
                                <label>Фамилия: </label>
                                <div className={cl.inputWrapper}>
                                    {
                                        surname ? <p>{surname}</p> :
                                        <>
                                            <input type="text" placeholder="Введите вашу фамилию" onChange={(e) => setInputSurname(e.target.value)}/>
                                            <button onClick={setSurnameInDB}>
                                                <img className={cl.done} src={done} alt="done" />
                                            </button>
                                        </> 
                                    }
                                </div>
                            </div>
                            <div>
                                <label>Email: <span>{email ? email : null}</span></label>
                            </div>
                            <div>
                                <label>Подписка: <span style={{color: isSubscribe || isSub ? "#1D79D2" : "white"}}>{isSubscribe || isSub ? "Активна" : "Не активна"}</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.logOut}>
                    <button className={cl.logOutButton} onClick={cancelSub}>Отменить подписку</button>
                    <button className={cl.logOutButton} onClick={logOut}>Выйти из аккаунта</button>
                    <button className={cl.deleteButton} onClick={deleteAccount}>Удалить аккаунт</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;