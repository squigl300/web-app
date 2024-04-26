import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ClientManagement from './ClientManagement';
import SessionScheduling from './SessionScheduling';
import ProgressTracking from './progress_tracking/ProgressTracking';
import AnalyticsInsights from './AnalyticsInsights';
import Notifications from './Notifications';
import SubscriptionTypesManagement from './SubscriptionTypesManagement';
import WorkoutManagement from '../workouts/WorkoutManagement';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <nav className="dashboard-nav">
        <Link to="/dashboard/client-management">Client Management</Link>
        <Link to="/dashboard/session-scheduling">Session Scheduling</Link>
        <Link to="/dashboard/progress-tracking">Progress Tracking</Link>
        <Link to="/dashboard/analytics-insights">Analytics & Insights</Link>
        <Link to="/dashboard/notifications">Notifications</Link>
        <Link to="/dashboard/subscription-management">Subscription Management</Link>
        <Link to="/dashboard/workout-management">Workout Management</Link>
      </nav>

      <Routes>
        <Route path="/client-management" element={<ClientManagement />} />
        <Route path="/session-scheduling" element={<SessionScheduling />} />
        <Route path="/progress-tracking" element={<ProgressTracking />} />
        <Route path="/analytics-insights" element={<AnalyticsInsights />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/subscription-management" element={<SubscriptionTypesManagement />} />
        <Route path="/workout-management" element={<WorkoutManagement />} />
      </Routes>
    </div>
  );
};

export default Dashboard;