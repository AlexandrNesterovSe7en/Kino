import { onValue, ref } from "firebase/database";
import Header from "../../../2MODULES/Header/Header";
import MainForFirstPage from "../../../2MODULES/MainForFirstPage/MainForFirstPage";
import { useEffect, useState } from "react";
import { database } from "../../../FireBase/FireBase";


const MainPage = () => {


    return (
        <>
            <Header />
            <MainForFirstPage />
        </>
    );
};

export default MainPage;