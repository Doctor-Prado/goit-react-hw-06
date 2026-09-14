import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"


function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Find Contacts by Name</h2>

            <input
                className={css.input}
                type="text"
                onChange={(event) => dispatch(changeFilter(event.target.value))}
                value={filter}
            />
        </div>
    );
}

export default SearchBox;