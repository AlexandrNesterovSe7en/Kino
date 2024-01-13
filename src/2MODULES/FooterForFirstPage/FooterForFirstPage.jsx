import cl from "./FooterForFirstPage.module.css";
import github from "../../4UI/Img/githubIcon.png";
import telegram from "../../4UI/Img/telegramIcon.png";
import vk from "../../4UI/Img/vkIcon.png";
import { Link } from "react-router-dom";


const FooterForFirstPage = () => {
    return (
        <footer className={cl.footerWrapper}>
            <h4 className={cl.whoWorks}>Над проектомм работали:<br /> Максим &#40;Kaden_&#41; и Александр &#40;SE7EN @_@&#41;</h4>
            <h4 className={cl.ourContacts}>Наши контакты</h4>
            <div className={cl.authors}>
                <h4 className={cl.author}>
                    Максим 
                    <a href="https://github.com/kasdfsfen" target="_blank"><img src={github} alt="github" className={cl.iconImg}/></a>
                    <a href="/" target="_blank"><img src={telegram} alt="telegram" className={cl.iconImg}/></a>
                    <a href="https://vk.com/id547351603" target="_blank"><img src={vk} alt="vk" className={cl.iconImg}/></a>
                </h4>
                <h4 className={cl.author}>
                    Александр
                    <a href="https://github.com/zxcPAPASHAzxc" target="_blank"><img src={github} alt="github" className={cl.iconImg}/></a>
                    <a href="/" target="_blank"><img src={telegram} alt="telegram" className={cl.iconImg}/></a>
                    <a href="/" target="_blank"><img src={vk} alt="vk" className={cl.iconImg}/></a>
                </h4>
            </div>
            <Link to="/moreInfo" className={cl.moreInfoLink}>
                <h4 className={cl.moreInfo}>
                    Информация о проекте
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                </h4>
            </Link>
        </footer>
    )
}

export default FooterForFirstPage;