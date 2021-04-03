import React, { useState, useEffect } from "react";

const Contact = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [userMessage, setUserMessage] = useState([]);

  const inputHandler = (e) => {
    if (e.target.name === "firstname") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastname") {
      setLastName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUserMessage([...userMessage, { firstname, lastname, email, message }]);
    setSuccessMsg(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setUserMessage(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg(false);
    }, 2000);

    localStorage.setItem("data", JSON.stringify(userMessage));
  }, [userMessage]);

  return (
    <div className="contact">
      <div>
        <h2>Contact</h2>
      </div>

      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First name"
          value={firstname}
          name="firstname"
          required
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastname}
          name="lastname"
          required
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
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
          <button className="btn" type="submit">
            Send
          </button>
        </div>
        <div>
          <p>{successMsg ? "Thanks for being awesome! " : null}</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
