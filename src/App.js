import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from './components/Navigation'; 
import Register from './pages/auth/Register'; 
import ClientManagement from './pages/dashboard/ClientManagement'; // Adjust the path as needed
import WorkoutManagement from './pages/workouts/WorkoutManagement';
import Notifications from './pages/dashboard/Notifications';


const App = () => {
  return (
    <Router>
      <Navigation /> {/* This makes the Navigation component available on all pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/client-management" element={<ClientManagement />} />
        <Route path="/" element={<Navigate replace to="/login" />} /> {/* Default redirection to login */}
        <Route path="/register" element={<Register />} />
        <Route path="/workouts" element={<ProtectedRoute><WorkoutManagement /></ProtectedRoute>} />
        <Route path="/dashboard/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
