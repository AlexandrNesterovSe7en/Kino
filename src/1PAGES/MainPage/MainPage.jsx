
import Card from "../../3COMPONENTS/Card/Card";
import bgImg from "../../4UI/Img/a3f38b98.jpg"
import cl from "./MainPage.module.css";
import img from "../../4UI/Img/ckt2cdjir4sqiatb04fg.jpg"



const MainPage = () => {
    return (
        <>
            <div>
                <img src={bgImg} alt="bgImg" className={cl.bgImg}/>
                <Card img={img} title="Отмороженные"/>
                
            </div>
        </>
    );
};

export default MainPage;