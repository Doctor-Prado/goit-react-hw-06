import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ list, onDelete }) {
    return (
        <ul className={css.list}>
            {list.map(item => {
                return (
                    <Contact
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        onDelete={onDelete}
                    />
                );
            })}
        </ul>
    );
}

export default ContactList;