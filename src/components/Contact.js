import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h2>Contact</h2>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="First name" required/>
        <input type="text" placeholder="Last name" required/>
        <input type="text" placeholder="Email" required/>
        <textarea placeholder="Message" required/>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
