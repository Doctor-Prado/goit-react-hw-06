import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ name, number, onDelete, id }) {
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
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </li>
    );
}

export default Contact;