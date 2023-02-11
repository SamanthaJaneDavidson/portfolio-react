import React, { useState } from 'react';
import './form.css';

function Contact() {

  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleFormSubmit = (e) => {

    e.preventDefault();

    setContactName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
        <p>
        For any questions or inquires please fill out the below form.
        </p>
      <form className="form">
        <input
          value={contactName}
          name="contactName"
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
