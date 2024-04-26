import React from 'react';
import ClientProgress from '../features/client/ClientProgress';
import ClientProgressChart from '../features/client/ClientProgressChart';
import ClientNutritionPlan from '../features/client/ClientNutritionPlan';
import CreateNutritionPlan from '../features/client/CreateNutritionPlan';
import ClientWorkouts from '../features/client/ClientWorkouts';
import AssignWorkoutToClient from '../features/workout/AssignWorkoutToClient';

// ClientDetailsPage component
const ClientDetailsPage = ({ clientId }) => {
  // Render the components related to client details
  return (
    <div>
      <h1>Client Details</h1>
      <ClientProgress clientId={clientId} />
      <ClientProgressChart clientId={clientId} />
      <ClientNutritionPlan clientId={clientId} />
      <CreateNutritionPlan clientId={clientId} />
      <ClientWorkouts clientId={clientId} />
      <AssignWorkoutToClient clientId={clientId} />
    </div>
  );
};

export default ClientDetailsPage;