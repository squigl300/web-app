import React, { useState, useEffect } from 'react';
import { createWorkout, getClients } from '../../services/WorkoutService';

const WorkoutManagement = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [workoutDifficulty, setWorkoutDifficulty] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedClientId, setSelectedClientId] = useState('');
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const clientsData = await getClients();
      setClients(clientsData);
    } catch (error) {
      console.error('Failed to fetch clients', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newWorkout = {
        name: workoutName,
        description: workoutDescription,
        difficulty: workoutDifficulty,
        exercises: exerciseList,
        clientId: selectedClientId,
        date: new Date().toISOString().split('T')[0],
      };
      await createWorkout(newWorkout);
      // Reset form fields after successful submission
      setWorkoutName('');
      setWorkoutDescription('');
      setWorkoutDifficulty('');
      setExerciseList([]);
      setSelectedClientId('');
    } catch (error) {
      console.error('Failed to create workout', error);
    }
  };

  return (
    <div>
      <h2>Workout Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="workoutName">Workout Name:</label>
          <input
            type="text"
            id="workoutName"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="workoutDescription">Description:</label>
          <textarea
            id="workoutDescription"
            value={workoutDescription}
            onChange={(e) => setWorkoutDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="workoutDifficulty">Difficulty:</label>
          <input
            type="text"
            id="workoutDifficulty"
            value={workoutDifficulty}
            onChange={(e) => setWorkoutDifficulty(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="exerciseList">Exercise List:</label>
          <textarea
            id="exerciseList"
            value={exerciseList.join('\n')}
            onChange={(e) => setExerciseList(e.target.value.split('\n'))}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="clientSelect">Assign to Client:</label>
          <select
            id="clientSelect"
            value={selectedClientId}
            onChange={(e) => setSelectedClientId(e.target.value)}
            required
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
};

export default WorkoutManagement;