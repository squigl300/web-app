import firebase from '../firebase/config';

const db = firebase.firestore();

export const getWorkouts = async () => {
  try {
    const snapshot = await db.collection('workouts').get();
    const workoutsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return workoutsData;
  } catch (error) {
    throw error;
  }
};

export const createWorkout = async (workout) => {
    try {
      await db.collection('workouts').add(workout);
    } catch (error) {
      throw error;
    }
  };
  
  export const getClients = async () => {
    try {
      const snapshot = await db.collection('clients').get();
      const clientsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return clientsData;
    } catch (error) {
      throw error;
    }
  };

export const updateWorkout = async (workoutId, updatedWorkout) => {
  try {
    await db.collection('workouts').doc(workoutId).update(updatedWorkout);
  } catch (error) {
    throw error;
  }
};

export const deleteWorkout = async (workoutId) => {
  try {
    await db.collection('workouts').doc(workoutId).delete();
  } catch (error) {
    throw error;
  }
};