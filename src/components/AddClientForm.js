// In src/components/AddClientForm.js
import React, { useState } from 'react';

const AddClientForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, email, phoneNumber });
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Client</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
      </label>
      <button type="submit">Add Client</button>
    </form>
  );
};

export default AddClientForm;
