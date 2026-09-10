import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { addContact, deleteContact } from './redux/contactsSlice';
import { useSelector, useDispatch } from "react-redux";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contact)

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={(values) => dispatch(addContact(values))} />
      <SearchBox />
      <ContactList list={contacts} onDelete={(id => dispatch(deleteContact(id)))} />
    </div>
  );
}

export default App;