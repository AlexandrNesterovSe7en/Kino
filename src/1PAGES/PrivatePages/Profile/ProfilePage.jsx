import { useEffect, useState } from "react";
import { auth, database } from "../../../FireBase/FireBase";
import cl from "./ProfilePage.module.css";
import { get, ref, update } from "firebase/database";
import { EmailAuthProvider, GoogleAuthProvider, deleteUser, reauthenticateWithCredential, reauthenticateWithRedirect, signInWithEmailLink, signOut } from "firebase/auth";
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

        // const credential = EmailAuthProvider.credentialWithLink(email, );

        // reauthenticateWithCredential(auth.currentUser, credential)
        

        auth.currentUser.delete()
        
        update(ref(database, `Users`), {
            [auth.currentUser.uid]: null
        }).then(() => {
            console.log("Аккаунт удален успешно");
        })
    }

    function setNameInDB() {
        if (inputName) {
            setName(inputName)
            update(ref(database, `Users/${auth.currentUser.uid}`), {
                Name: inputName
            }).then(() => {
                console.log("Имя успешно обновлено");
            })
        }
    }

    function setSurnameInDB() {
        if (inputSurname) {
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

    function editName() {
        setName("");
        setInputName("");
        update(ref(database, `Users/${auth.currentUser.uid}`), {
            Name: ""
        })
    }

    function editSurname() {
        setSurname("")
        setInputSurname("")
        update(ref(database, `Users/${auth.currentUser.uid}`), {
            Surname: ""
        })
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.container} style={{ borderColor: isSubscribe || isSub ? "#1D79D2" : "grey", boxShadow: isSubscribe || isSub ? "0 0 7px #1D79D2" : "0 0 0" }}>
                <div className={cl.userInfo}>
                    <div className={cl.profileImgWrapper}>
                        <div className={cl.imgBorder}
                            style={{ borderColor: isSubscribe || isSub ? "#1D79D2" : "grey", boxShadow: isSubscribe || isSub ? "0 0 7px #1D79D2" : "0 0 0" }}>
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
                                        name ? <p className={cl.name}>{name} <svg xmlns="http://www.w3.org/2000/svg" onClick={editName} fill="grey" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" /></svg></p> :
                                            <>
                                                <input type="text" placeholder="Введите ваше имя" onChange={(e) => setInputName(e.target.value)} />
                                                <button onClick={setNameInDB} className={cl.doneButton}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </button>
                                            </>
                                    }
                                </div>
                            </div>
                            <div className={cl.infoString}>
                                <label>Фамилия: </label>
                                <div className={cl.inputWrapper}>
                                    {
                                        surname ? <p className={cl.surname}>{surname} <svg xmlns="http://www.w3.org/2000/svg" onClick={editSurname} fill="grey" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" /></svg></p> :
                                            <>
                                                <input type="text" placeholder="Введите вашу фамилию" onChange={(e) => setInputSurname(e.target.value)} />
                                                <button onClick={setSurnameInDB} className={cl.doneButton}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className={cl.done} height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </button>
                                            </>
                                    }
                                </div>
                            </div>
                            <div>
                                <label>Email: <span>{email ? email : null}</span></label>
                            </div>
                            <div>
                                <label>Подписка: <span style={{ color: isSubscribe || isSub ? "#1D79D2" : "white" }}>{isSubscribe || isSub ? "Активна" : "Не активна"}</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.logOut}>
                    <button className={cl.cancelSubButton} onClick={cancelSub}>Отменить подписку</button>
                    <button className={cl.logOutButton} onClick={logOut}>Выйти из аккаунта</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;