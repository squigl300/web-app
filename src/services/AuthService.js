import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to log in the user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    const { token } = response.data;
    // Store the received token in localStorage or your preferred storage
    localStorage.setItem('userToken', token);
    return token;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    await axios.post(`${API_BASE_URL}/auth/register`, userData);
    // You might want to automatically log the user in after registration or redirect to the login page
  } catch (error) {
    throw error;
  }
};

export const recoverPassword = async (email) => {
    const response = await axios.post(`${API_BASE_URL}/auth/password-recovery`, { email });
    return response.data; // The backend should handle the logic for sending a recovery email
  };

  export const logoutUser = () => {
    localStorage.removeItem('userToken');
    // Any other cleanup logic here
  };

  export const resetPassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  };