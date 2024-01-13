import { useSelector } from "react-redux";
import MainButton from "../../4UI/Buttons/MainButton/MainButton";
import cl from './AddFavoriteFilm.module.css';
import { database } from "../../FireBase/FireBase";
import { ref, update } from "firebase/database";
import useThrottle from "../../HOOKS/useThrottle";

const AddFavoriteFilm = ({ idFilm }) => {
    const user = useSelector(state => state.currentUser.user)
    const throttle = useThrottle();

    const addFavorite = throttle(1000, function () {
        const r = ref(database, 'Users/' + user.uid + '/Favorite');
        const updates = {};
        updates[idFilm] = true;
        update(r, updates)
    })

    return (
        <div onClick={() => user ? addFavorite() : null} className={cl.container}>
            <MainButton className={cl.circle}>
                <svg viewBox="-5 -5 34 34" xmlns="http://www.w3.org/2000/svg"><path d="M6.11153 3.68257C6.47106 3.56911 6.69517 3.52352 7.3085 3.43899C7.55111 3.40557 8.42381 3.45755 8.75957 3.52546C9.80641 3.73714 10.8203 4.25353 11.6951 5.02058L11.9902 5.27936L12.3307 4.95668C13.1005 4.22719 14.1295 3.7099 15.1869 3.52085C15.7672 3.4171 16.6844 3.42565 17.2426 3.54001C19.4683 3.99596 21.1362 5.67089 21.6336 7.94946C21.7399 8.43632 21.7414 9.61118 21.6365 10.1706C21.2935 11.9989 20.388 13.7216 18.8317 15.5063C18.2985 16.1179 17.007 17.3662 16.3184 17.9358C15.5584 18.5643 14.595 19.2785 13.6958 19.8798C12.8433 20.4499 12.543 20.5714 11.9875 20.5714C11.4271 20.5714 11.1538 20.4576 10.1957 19.825C8.48553 18.6958 7.19942 17.6569 5.95919 16.4027C4.8283 15.259 4.18102 14.4306 3.50837 13.2659C1.73761 10.1999 1.90031 7.02194 3.93127 5.0075C4.56997 4.37398 5.27161 3.94761 6.11153 3.68257Z"></path></svg>
            </MainButton>
            <div>
                Добавить в избранное
            </div>
        </div>
    );
};

export default AddFavoriteFilm;