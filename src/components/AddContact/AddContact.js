import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  function handleClick() {
    if (name.trim() === "") {
      alert("Please enter a name!");
      return;
    }
    if (surname.trim() == "") {
      alert("Please enter a surname!");
      return;
    }
    if (phone.trim() === "") {
      alert("Please enter a phone!");
      return;
    }
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Имя"
      />
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Фамилия"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Номер телефона"
      />
      <button onClick={handleClick}>Добавить контакт</button>
    </div>
  );
};

export default AddContact;
