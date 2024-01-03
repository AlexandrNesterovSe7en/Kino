import { onValue, ref } from "firebase/database";
import FooterForFirstPage from "../../../2MODULES/FooterForFirstPage/FooterForFirstPage";
import Header from "../../../2MODULES/Header/Header";
import MainForFirstPage from "../../../2MODULES/MainForFirstPage/MainForFirstPage";
import { useEffect, useState } from "react";
import { database } from "../../../FireBase/FireBase";


const MainPage = () => {

    const [fighters, setFighters] = useState([]);
    const [serials, setSerials] = useState([]);
    const [comedies, setComedies] = useState([]);



    
    useEffect(() => {

        const fighter = ref(database, "/Movies/Cateogries/Fighters");
        onValue(fighter, snapshot => {
            setFighters(Object.values(snapshot.val()));
        })
        
        const serial = ref(database, "/Movies/Cateogries/Serials");
        onValue(serial, snapshot => {
            setSerials(Object.values(snapshot.val()));
        })
        
        const comedy = ref(database, "/Movies/Cateogries/Сomedies");
        onValue(comedy, snapshot => {
            setComedies(Object.values(snapshot.val()));
        })

    }, [])
    

    return (
        <>
            <Header />
            <MainForFirstPage fighters={fighters} serials={serials} comedies={comedies}/>
            <FooterForFirstPage />
        </>
    );
};

export default MainPage;