import cl from './PlotMovie.module.css';

const PlotMovie = ({children}) => {
    return (
        <div className={cl.container}>
            <h2>Сюжет</h2>
            <p>{children}</p>
        </div>
    );
};

export default PlotMovie;