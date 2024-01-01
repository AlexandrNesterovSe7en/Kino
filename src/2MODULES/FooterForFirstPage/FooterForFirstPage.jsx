
import cl from "./FooterForFirstPage.module.css";
import github from "../../4UI/Img/githubIcon.png";
import telegram from "../../4UI/Img/telegramIcon.png";
import vk from "../../4UI/Img/vkIcon.png";


const FooterForFirstPage = () => {
    return (
        <footer className={cl.footerWrapper}>
            <h4 className={cl.whoWorks}>Над проектомм работали:<br /> Максим &#40;Kaden_&#41; и Александр &#40;SE7EN @_@&#41;</h4>
            <h4 className={cl.outContacts}>Наши контакты</h4>
            <div className={cl.authors}>
                <h4 className={cl.author}>
                    Максим 
                    <a href=""><img src={github} alt="github" /></a>
                    <a href=""><img src={telegram} alt="telegram" /></a>
                    <a href=""><img src={vk} alt="vk" /></a>
                </h4>
                <h4 className={cl.author}>
                    Александр
                    <a href=""><img src={github} alt="github" /></a>
                    <a href=""><img src={telegram} alt="telegram" /></a>
                    <a href=""><img src={vk} alt="vk" /></a>
                </h4>
            </div>
        </footer>
    )
}

export default FooterForFirstPage;