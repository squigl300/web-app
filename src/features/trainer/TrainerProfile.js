import React, { useEffect, useState } from 'react';

// TrainerProfile component
const TrainerProfile = () => {
  // State variable for trainer profile data
  const [profile, setProfile] = useState(null);

  // Fetch trainer profile data on component mount
  useEffect(() => {
    fetchTrainerProfile();
  }, []);

  // Function to fetch trainer profile data from the server
  const fetchTrainerProfile = async () => {
    try {
      const response = await fetch('/api/trainers/profile', {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching trainer profile:', error);
    }
  };

  // Render the trainer profile data
  return (
    <div>
      <h2>Trainer Profile</h2>
      {profile ? (
        <>
          <p>First Name: {profile.firstName}</p>
          <p>Last Name: {profile.lastName}</p>
          <p>Email: {profile.email}</p>
          <p>Membership Type: {profile.membershipType}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrainerProfile;