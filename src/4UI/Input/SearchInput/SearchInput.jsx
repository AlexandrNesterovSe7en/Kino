import { useEffect, useState } from "react";
import cl from "./SearchInput.module.css";
import { limitToFirst, onValue, orderByChild, query, ref } from "firebase/database";
import { database } from "../../../FireBase/FireBase";

// Строка поиска
const SearchInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const cat = ref(database, '/Movies/Cateogries/Comedies');
        onValue(cat, snapshot => {
            Object.values(snapshot.val()).map(el => {
                // console.log(el.title);
                if(inputValue.length === 0) {
                    return null;
                }
                else if(el.title.toLowerCase().includes(inputValue.toLowerCase()) && inputValue !== " ") {
                    if(!data.includes(el.title)){
                        setData([...data, el.title])
                    }
                }else if(data.includes(el.title)) {
                    setData(prev => prev.filter(el => !data.includes(el)))
                }
            })
        })
    }, [inputValue])

    console.log(data);

    return (
        <div className={cl.searchBox}>
            <button className={cl.btnSearch}><svg xmlns="http://www.w3.org/2000/svg" className={cl.faSearch} fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
            <input type="text" className={cl.inputSearch} placeholder="Найдется все!" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    );
}

export default SearchInput;