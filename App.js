import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactsList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  let [contacts, setContacts] = useState([]);
  let [editContacts, setEditContacts] = useState({});
  let [isEditContacts, setIsEditContacts] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }
  function handleDelete(id) {
    let newContactsArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactsArray);
  }

  function handleEditIndex(index) {
    setEditContacts(contacts[index]);
    setIsEditContacts(true);
  }

  function handleSave(newContact) {
    let newContactsArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactsArray);
    setIsEditContacts(false);
  }

  return (
    <div>
      <AddContact handleNewContact={handleNewContact} />
      {isEditContacts ? (
        <EditContact editContacts={editContacts} handleSave={handleSave} />
      ) : null}

      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;
