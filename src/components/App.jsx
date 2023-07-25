import React, { useEffect, useState } from 'react';
import './App.module.css';
import AddContactForm from './AddContactForm/AddContactForm';
import app from './App.module.css';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = data => {
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (duplicateContact) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, data]);
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  const checkValueInContacts = value => {
    const lowercaseValue = value.toLowerCase();
    return contacts.some(contact =>
      contact.name.toLowerCase().includes(lowercaseValue)
    );
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const isValueInContacts = checkValueInContacts(filter);

  return (
    <div className={app.position}>
      <div className={app.app}>
        <h1 className={app.headline}>Phonebook</h1>
        <AddContactForm onAddContact={handleAddContact} />
        <h2 className={app.headline}>Contacts</h2>
        <Filter
          filter={filter}
          onFilterChange={handleFilterChange}
          isValueInContacts={isValueInContacts}
        />
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
