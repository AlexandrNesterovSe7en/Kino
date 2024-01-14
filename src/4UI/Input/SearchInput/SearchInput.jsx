import { useEffect, useState } from "react";
import cl from "./SearchInput.module.css";
import { limitToFirst, onValue, orderByChild, query, ref } from "firebase/database";
import { database } from "../../../FireBase/FireBase";
import SearchInputCard from "../../../3COMPONENTS/SearchInputCard/SearchInputCard";
import RenderSearchInputModal from "../../../2MODULES/RenderSearchInputModal/RenderSearchInputModal";

// Строка поиска
const SearchInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [titles, setTitles] = useState([]);
    const [data, setData] = useState([]);

    function clearData() {
            setData([]);
            setTitles([]);
    }

    // useEffect(() => {
    //     const cat = ref(database, '/Movies/Cateogries/Comedies');
    //     onValue(cat, snapshot => {
    //         Object.values(snapshot.val()).map(el => {
    //             // console.log(el.title);
    //             if (inputValue.length === 0) {
    //                 setData([])
    //                 setTitles([])
    //                 return null;
    //             }
    //             else if (el.title.toLowerCase().includes(inputValue.toLowerCase()) &&
    //                 // inputValue.includes(" ") &&
    //                 inputValue !== " " &&
    //                 !titles.includes(el.title)) {
    //                 setData(prev => [el, ...prev])
    //                 setTitles(prev => [...prev, el.title]);
    //             }

    //             if (el.title.toLowerCase().includes(inputValue.toLowerCase()) &&
    //                 titles.includes(el.title)) {
    //                 setData(prev => prev.filter(e => !titles.includes(e.title)))
    //                 setTitles(prev => prev.filter(e => !titles.includes(e.title)))
    //             }
    //             // if (el.title.toLowerCase().includes(inputValue.toLowerCase()) &&
    //             //     inputValue.includes(" ") && titles.includes(el.title)
    //             // ) {
    //             //     setData(prev => prev.filter(e => !e.includes(inputValue)));
    //             //     setTitles(prev => prev.filter(e => !e.includes(inputValue)));
    //             // }
    //         })
    //     })
    //     return clearData;
    // }, [inputValue])

    // console.log(titles)
    // console.log(data);

    return (
        <div className={cl.searchInputWrapper}>
            <div className={cl.searchBox}>
                <button className={cl.btnSearch}><svg xmlns="http://www.w3.org/2000/svg" className={cl.faSearch} fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
                <input type="text" className={cl.inputSearch} placeholder="Найдется все!" onChange={(e) => setInputValue(e.target.value)} />
            </div>
            {
                data.length > 0 ?
                    <div className={cl.searchModal}>
                        <RenderSearchInputModal data={data} />
                    </div>
                    :
                    <></>
            }
        </div>
    );
}

export default SearchInput;