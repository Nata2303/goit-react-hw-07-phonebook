import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import style from './contactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    dispatch(addContact({ name, number }));

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name" className={style.label}>
        Name
        <input type="text" name="name" required />
      </label>

      <label htmlFor="number" className={style.label}>
        Number
        <input type="text" name="number" required />
      </label>

      <button type="submit" className={style.add}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
