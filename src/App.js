import React from 'react';
import {connect} from 'react-redux';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactItem from './components/ContactItem';
import Filter from './components/Filter'

function App({ items }) {
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>

      {items.length > 0 ? (
        <>
          <Filter />
          <ContactList>
            <ContactItem />
          </ContactList>
        </>
      ) : (
        <span>You have no contacts!</span>
      )}
    </>
  )
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

export default connect(mapStateToProps)(App);
