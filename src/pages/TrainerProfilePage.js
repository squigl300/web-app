import React from 'react';
import TrainerProfile from '../features/trainer/TrainerProfile';
import TrainerProfileUpdate from '../features/trainer/TrainerProfileUpdate';

// TrainerProfilePage component
const TrainerProfilePage = () => {
  // Render the TrainerProfile and TrainerProfileUpdate components
  return (
    <div>
      <h1>Trainer Profile</h1>
      <TrainerProfile />
      <TrainerProfileUpdate />
    </div>
  );
};

export default TrainerProfilePage;