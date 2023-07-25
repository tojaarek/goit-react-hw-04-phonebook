import results from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <ul className={results.list}>
        <li className={results.empty}>There is no contacts yet</li>
      </ul>
    );
  }
  return (
    <ul className={results.list}>
      {contacts.map(contact => (
        <li className={results.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={results.button}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
