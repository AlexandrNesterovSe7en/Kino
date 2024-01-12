
import { useState } from "react";
import cl from "./AdminPanel.module.css";
import { database } from "../../../FireBase/FireBase";
import { limitToLast, onValue, query, ref, remove } from "firebase/database";


const AdminPanel = () => {

    const [deleteInput, setDeleteInput] = useState("");


    function deleteMovie() {
        remove(ref(database, `/Movies/${deleteInput}`))
            .then(() => {
                console.log("Фильм успешно удален");
            })
            .catch(err => {
                console.log("Вероятно такого UID не существует");
            })
    }
    
    function deleteRepetitions() {

        const uniqueMovies = {}
        const deleteMovies = {}
        const moviesRef = ref(database, "Movies")

        onValue(moviesRef, snap => {
            snap.forEach(childSnap => {
                const movie = childSnap.val();
                const movieKey = childSnap.key;

                const movieKeyExists = uniqueMovies.hasOwnProperty(movieKey)
                const movieExists = Object.values(uniqueMovies).some(m => m.title === movie.title)

                if(movieKeyExists || movieExists) {
                    deleteMovies[movieKey] = movie
                }else{
                    uniqueMovies[movieKey] = movie
                }
            })

        })
        Object.keys(deleteMovies).forEach(movieKey => {
            setTimeout(() => {
                remove(ref(database, `/Movies/${movieKey}`))
                    .then(() => {
                        console.log("Повтор успешно удален");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }, 1000)
        })
    }

    function delete500Movies() {
        const moviesRef = query(ref(database, "Movies"), limitToLast(500))

        onValue(moviesRef, snap => {
            Object.keys(snap.val()).map(childSnap => {
                remove(ref(database, `Movies/${childSnap}`))
                console.log("+");
            });
        })
    }
    
    return (
        <div className={cl.adminPanelWrapper}>
            <h1>Админ панель</h1>
            <div className={cl.functionalWrapper}>
                <div className={cl.deleteWrapper}>
                    <h2>Удалить фильм</h2>
                    <div className={cl.deleteInputWrapper}>
                        <input type="text" placeholder="Введите UID" onChange={(e) => setDeleteInput(e.target.value)}/>
                        <button className={cl.deleteButton} onClick={deleteMovie}>Удалить</button>
                    </div>
                </div>
                <hr />
                <div className={cl.deleteRepetitionsWrapper}>
                    <h2>Удалить повторяющиеся фильмы</h2>
                    <button onClick={deleteRepetitions}>Удалить повторы</button>
                </div>
                <hr />
                <div>
                    <h2>Удалить 500 последних записей</h2>
                    <button onClick={delete500Movies}>Удалить записи</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;