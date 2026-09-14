import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
    const list = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);
    const filteredContacts = list.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul className={css.list}>
            {filteredContacts.map(item => {
                return (
                    <Contact
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                    />
                );
            })}
        </ul>
    );
}

export default ContactList;