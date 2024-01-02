import bgImg from "../../4UI/Img/bgImg.jpg";
import cl from "./Header.module.css";
import InfoAboutSubscribe from "../../3COMPONENTS/InfoAboutSubscribe/InfoAboutSubscribe";


const Header = () => {
    return (
        <header className={cl.header}>
                <img src={bgImg} alt="bgImg" className={cl.bgImg}/>
                <InfoAboutSubscribe />
        </header>
    )
}

export default Header;