import React, { useEffect, useState } from 'react';

// ClientProgress component
const ClientProgress = ({ clientId }) => {
  // State variable for client progress data
  const [progress, setProgress] = useState(null);

  // Fetch client progress data on component mount and when clientId changes
  useEffect(() => {
    fetchClientProgress();
  }, [clientId]);

  // Function to fetch client progress data from the server
  const fetchClientProgress = async () => {
    try {
      const response = await fetch(`/api/clients/${clientId}/progress`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setProgress(data);
    } catch (error) {
      console.error('Error fetching client progress:', error);
    }
  };

  // Render the client progress data
  return (
    <div>
      <h2>Client Progress</h2>
      {progress ? (
        <>
          <p>Completed Workouts: {progress.completedWorkouts}</p>
          {/* Display other progress data */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ClientProgress;