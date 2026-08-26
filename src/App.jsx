import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import css from './App.module.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedValue = window.localStorage.getItem("saved");
    if (savedValue !== null) {
      return JSON.parse(savedValue);
    }
    return ([
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
    )

  }

  )

  useEffect(() => {
    window.localStorage.setItem("saved", JSON.stringify(contacts))
  }, [contacts])

  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = (newContact) => {
    const contactId = nanoid();

    const contact = {
      ...newContact,
      id: contactId,
    }
    setContacts((prevContact) => {
      return ([
        ...prevContact,
        contact
      ])
    })
  }

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} onChange={event => setFilter(event.target.value)}
      />
      <ContactList list={filteredContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
