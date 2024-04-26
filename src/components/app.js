import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import TrainerProfilePage from '../pages/TrainerProfilePage';
import ClientDetailsPage from '../pages/ClientDetailsPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trainer-profile" element={<TrainerProfilePage />} />
        <Route path="/client-details/:clientId" element={<ClientDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;