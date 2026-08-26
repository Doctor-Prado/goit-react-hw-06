import css from "./SearchBox.module.css";

function SearchBox({ onChange, filter }) {
    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Find Contacts by Name</h2>

            <input
                className={css.input}
                type="text"
                onChange={onChange}
                value={filter}
            />
        </div>
    );
}

export default SearchBox;