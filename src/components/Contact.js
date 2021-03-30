import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h2>Contact</h2>
      </div>

      <form className="contact-form">
        <input type="text"  placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="text" placeholder='Email'/>
        <input type="textarea" placeholder='Message' />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
