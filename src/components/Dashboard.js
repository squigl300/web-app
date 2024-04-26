import React from 'react';
import ClientManagement from '../features/client/ClientManagement';
import PostUpdates from '../features/post/PostUpdates';
import Notifications from '../features/notification/Notifications';

// Dashboard component
const Dashboard = () => {
  return (
    <div>
      <h1>Trainer Dashboard</h1>
      <ClientManagement />
      <PostUpdates />
      <Notifications />
    </div>
  );
};

export default Dashboard;