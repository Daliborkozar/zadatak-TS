import React, { useState } from "react";

const Contact = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [delivered, setDelivered] = useState(false);

  const inputHandler = (e) => {
    if (e.target.value === "firstname") {
      setFirstName(e.target.value);
    } else if (e.target.value === "lastname") {
      setLastName(e.target.value);
    } else if (e.target.value === email) {
      setEmail(e.target.value);
    } else setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //TODO - local storage and message
  };

  return (
    <div className="contact">
      <div>
        <h2>Contact</h2>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="First name"
          value={firstname}
          required
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastname}
          required
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          required
          onChange={inputHandler}
        />
        <textarea
          placeholder="Message"
          value={message}
          required
          onChange={inputHandler}
        />
        <div className="btn-container">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
