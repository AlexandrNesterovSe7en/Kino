import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { database } from "../../../FireBase/FireBase"
import RenderCategories from "../../../2MODULES/RenderCategories/RenderCategories";
import cl from "./CategoriesPage.module.css";

const CategoriesPage = () => {

    return <Outlet />
};

export default CategoriesPage;