import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to log in the user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    const { token } = response.data;
    // Store the received token in localStorage 
    localStorage.setItem('userToken', token);
    return token;
  } catch (error) {
    throw error;
  }
};

// Function to register user
export const registerUser = async (userData) => {
  try {
    await axios.post(`${API_BASE_URL}/auth/register`, userData);
  } catch (error) {
    throw error;
  }
};

// Function to recover password
export const recoverPassword = async (email) => {
    const response = await axios.post(`${API_BASE_URL}/auth/password-recovery`, { email });
    return response.data; // The backend should handle the logic for sending a recovery email
  };

// Function to logout user
  export const logoutUser = () => {
    localStorage.removeItem('userToken');
    
  };

// Function to reset password with firebase
  export const resetPassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  };
