import bgImg from "../../4UI/Img/bgImg.jpg";
import NavBar from "../NavBar/NavBar";
import cl from "./Header.module.css";
import MainButton from "../../4UI/Buttons/MainButton/MainButton"
import InfoAboutSubscribe from "../../3COMPONENTS/InfoAboutSubscribe/InfoAboutSubscribe";


const Header = () => {
    return (
        <header className={cl.header}>
                <img src={bgImg} alt="bgImg" className={cl.bgImg}/>
                <NavBar className={cl.navBar}/> 
                <InfoAboutSubscribe />
        </header>
    )
}

export default Header;