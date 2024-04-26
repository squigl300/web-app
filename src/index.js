import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './firebase/config';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import reportWebVitals from './reportWebVitals';

// Create a root element for your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App component with AuthProvider to make authentication context available throughout your application
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// The reportWebVitals is a tool that helps you measure the performance of your app.
// This function call is optional and can be removed if you are not using it.
reportWebVitals();