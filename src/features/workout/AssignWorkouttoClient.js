import React, { useState } from 'react';

// AssignWorkoutToClient component
const AssignWorkoutToClient = ({ clientId }) => {
  // State variables for form fields
  const [exerciseName, setExerciseName] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/clients/${clientId}/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
        body: JSON.stringify({ exerciseName, description }),
      });
      // Clear form fields after successful submission
      setExerciseName('');
      setDescription('');
    } catch (error) {
      console.error('Error assigning workout:', error);
    }
  };

  // Render the assign workout form
  return (
    <div>
      <h2>Assign Workout to Client</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Assign Workout</button>
      </form>
    </div>
  );
};

export default AssignWorkoutToClient;