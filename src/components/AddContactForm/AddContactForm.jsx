import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import form from './AddContactForm.module.css';
import PropTypes from 'prop-types';

const AddContactForm = ({ onAddContact }) => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = data => {
    setContacts(prevContacts => [...prevContacts, data]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formHTML = event.currentTarget;

    const id = nanoid();
    const name = formHTML.elements.name.value;
    const number = formHTML.elements.number.value;

    handleAddContact({ id, name, number });
    onAddContact({ id, name, number });
    formHTML.reset();
  };

  return (
    <form className={form.formBorder} onSubmit={handleSubmit}>
      <label className={form.label} htmlFor="name">
        Name
        <input
          className={form.input}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я ]+((['\-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={form.label} htmlFor="phone-number">
        Number
        <input
          className={form.input}
          id="phone-number"
          type="tel"
          name="number"
          pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={form.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default AddContactForm;
