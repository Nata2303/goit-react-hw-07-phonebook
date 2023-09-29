import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import style from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

 const filteredContacts = contacts.filter(contact => {
   if (typeof filter !== 'string') {
     // Обробка випадку, коли filter не є рядком
     return false; // або інша логіка обробки
   }

   return (
     contact &&
     contact.name &&
     contact.number &&
     contact.name.toLowerCase().includes(filter.toLowerCase())
   );
 });

  const handleDeleteContact = async id => {
    try {
      await dispatch(deleteContact(id));
    } catch (error) {
      console.error('Помилка при видаленні контакта:', error);
    }
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
