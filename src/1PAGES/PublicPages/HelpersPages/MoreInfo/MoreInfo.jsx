import { useEffect } from "react";
import cl from "./MoreInfo.module.css";
import kinopoisk from "../../../../4UI/Img/kinopoisk.png"
import htmlIcon from "../../../../4UI/Img/htmlIcon.png";
import cssIcon from "../../../../4UI/Img/cssIcon.png"
import jsIcon from "../../../../4UI/Img/jsIcon.png"
import reactIcon from "../../../../4UI/Img/reactIcon.png"
import reduxIcon from "../../../../4UI/Img/reduxIcon.png"
import pythonIcon from "../../../../4UI/Img/pythonIcon.png"
import firebaseIcon from "../../../../4UI/Img/firebaseIcon.png"
import reactRouterIcon from "../../../../4UI/Img/reactRouterIcon.png"

const MoreInfo = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <h2>О проекте</h2>
                <h4>Вдохновлением данному проекту послужили сайты <img className={cl.kinopoisk} src={kinopoisk} alt="kinopoisk" /> и  
                <span className={cl.wink}> WINK</span>, они и легли в основу 
                нашего дизайна. Проект создавался в целях получения новых 
                знаний и оттачивания уже имеющихся навыков, а также для получения 
                опыта работы в команде. Для нас обоих сайт такой тематики был в новинку, 
                но с задачей мы справились и результатом остались довольны. В ходе 
                создания проекта мы познакомились с <img src={firebaseIcon} alt="" className={cl.firebaseMiniIcon} />Firebase, 
                а также с парсингом на <img src={pythonIcon} alt="" className={cl.pythonMiniIcon}/>Python. Разработка проекта 
                длилась около месяца.</h4>
            </div>
            <div className={cl.technologies}>
                <h2>Весь стэк технологий</h2>
                <div className={cl.iconsWrapper}>
                    <a rel="noreferrer" href="https://ru.wikipedia.org/wiki/HTML#:~:text=HTML%20(%D0%BE%D1%82%20%D0%B0%D0%BD%D0%B3%D0%BB.%20HyperText%20Markup,%D1%8F%D0%B2%D0%BB%D1%8F%D1%8E%D1%82%D1%81%D1%8F%20%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0%D0%BC%D0%B8%20HTML%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86" target="_blank">
                        <div className={cl.htmlIconWrapper}><img className={cl.htmlIcon} src={htmlIcon} alt="" /> HTML</div>
                    </a>
                    <a rel="noreferrer" href="https://ru.wikipedia.org/wiki/CSS" target="_blank">
                        <div className={cl.cssIconWrapper}><img className={cl.cssIcon} src={cssIcon} alt="" /> CSS</div>
                    </a>
                    <a rel="noreferrer" href="https://ru.wikipedia.org/wiki/JavaScript" traget="_blank">
                        <div className={cl.jsIconWrapper}><img className={cl.jsIcon} src={jsIcon} alt="" /> Java Script</div>
                    </a>
                    <a rel="noreferrer" href="https://www.python.org/" traget="_blank">
                        <div className={cl.pythonIconWrapper}><img className={cl.pythonIcon} src={pythonIcon} alt="" /> Python</div>
                    </a>
                    <a rel="noreferrer" href="https://react.dev/" traget="_blank">
                        <div className={cl.reactIconWrapper}><img className={cl.reactIcon} src={reactIcon} alt="" /> React</div>
                    </a>
                    <a rel="noreferrer" href="https://redux.js.org/" traget="_blank">
                        <div className={cl.reduxIconWrapper}><img className={cl.reduxIcon} src={reduxIcon} alt="" />Redux</div>
                    </a>
                    <a rel="noreferrer" href="https://firebase.google.com/" traget="_blank">
                        <div className={cl.firebaseIconWrapper}><img className={cl.firebaseIcon} src={firebaseIcon} alt="" />Firebase</div>
                    </a>
                    <a rel="noreferrer" href="https://reactrouter.com/en/main" target="_blank">
                        <div className={cl.reactRouterIconWrapper}><img className={cl.reactRouterIcon} src={reactRouterIcon} alt="" /> React Router</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;