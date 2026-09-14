import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

function Contact({ name, number, id }) {
    const dispatch = useDispatch();

    return (
        <li className={css.item}>
            <div className={css.info}>
                <p className={css.name}>
                    <FaUser className={css.icon} />
                    {name}
                </p>

                <p className={css.number}>
                    <FaPhone className={css.icon} />
                    {number}
                </p>
            </div>

            <button
                className={css.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;