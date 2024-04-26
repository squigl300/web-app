import React, { useEffect, useState } from 'react';

// ClientWorkouts component
const ClientWorkouts = ({ clientId }) => {
  // State variable for workouts data
  const [workouts, setWorkouts] = useState([]);

  // Fetch workouts data on component mount and when clientId changes
  useEffect(() => {
    fetchWorkouts();
  }, [clientId]);

  // Function to fetch workouts data from the server
  const fetchWorkouts = async () => {
    try {
      const response = await fetch(`/api/clients/${clientId}/workouts`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setWorkouts(data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  // Render the list of client workouts
  return (
    <div>
      <h2>Client Workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <p>Exercise: {workout.exerciseName}</p>
            <p>Description: {workout.description}</p>
            <p>Timestamp: {workout.timestamp}</p>
            <p>Completed: {workout.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientWorkouts;