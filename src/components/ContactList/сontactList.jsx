import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import style from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact &&
      contact.name &&
      contact.number &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={style.wrap}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <span className={style.contact}>{name}: </span>
              <span className={style.contact}>{number}</span>
              <button
                onClick={() => handleDeleteContact(id)}
                className={style.delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;
