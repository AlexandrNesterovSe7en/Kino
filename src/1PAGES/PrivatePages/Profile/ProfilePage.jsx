import cl from "./ProfilePage.module.css";

const ProfilePage = () => {
    
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.userInfo}>
                    <div className={cl.profileImgWrapper}>
                        <div className={cl.imgBorder}               >
                            <div className={cl.profileImg}>K</div>
                        </div>
                    </div>
                    <div className={cl.infoWrapper}>
                        <h2>Информация об аккаунте</h2>
                        <div className={cl.info}>
                            <div className={cl.infoString}>
                                <label>Имя</label>
                                <div className={cl.inputWrapper}>
                                    <input type="text" placeholder="Введите ваше имя"/>
                                    <button>OK</button>
                                </div>
                            </div>
                            <div className={cl.infoString}>
                                <label>Фамилия</label>
                                <div className={cl.inputWrapper}>
                                    <input type="text" placeholder="Введите вашу фамилию"/>
                                    <button>OK</button>
                                </div>
                            </div>
                            <div>
                                <label>Email: </label>
                                <p></p>
                            </div>
                            <div>
                                <label>Подписка: </label>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl.logOut}>
                    <button className={cl.logOutButton}>Выйти из аккаунта</button>
                    <button className={cl.deleteButton}>Удалить аккаунт</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;