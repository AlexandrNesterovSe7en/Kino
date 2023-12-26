import cl from "./SearchInput.module.css";

const SearchInput = () => {
    return ( 
        <div>
            <input type="text" placeholder="Найдется все!" className={cl.searchInput}/>
            <span class="material-symbols-outlined">
                search
            </span>
        </div>
     );
}
 
export default SearchInput;