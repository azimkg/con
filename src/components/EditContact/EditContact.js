import React, { useState } from "react";
import "./EditContact.css";

const EditContact = (props) => {
  let [name, setName] = useState(props.editContacts.name);
  let [surname, setSurname] = useState(props.editContacts.surname);
  let [phone, setPhone] = useState(props.editContacts.phone);

  function saveContacts() {
    let contact = { ...props.editContacts };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;
    props.handleSave(contact);

    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div className="main">
      <div className="modal">
        <input
          className="inp"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Имя"
        />
        <input
          className="inp"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Фамилия"
        />
        <input
          className="inp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Номер телефона"
        />
        <button className="btn" onClick={saveContacts}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditContact;
