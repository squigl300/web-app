import React, { useState } from 'react';

// TrainerProfileUpdate component
const TrainerProfileUpdate = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/trainers/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      // Clear form fields after successful update
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error('Error updating trainer profile:', error);
    }
  };

  // Render the trainer profile update form
  return (
    <div>
      <h2>Update Trainer Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default TrainerProfileUpdate;