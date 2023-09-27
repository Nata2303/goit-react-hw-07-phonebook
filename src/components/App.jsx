import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Імпортуйте PersistGate
import { store, persistor } from 'redux/store';
import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/сontactList';
import Filter from './Filter/filter';
import style from './app.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {' '}
        {/* Використовуйте PersistGate */}
        <div className={style.app}>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
