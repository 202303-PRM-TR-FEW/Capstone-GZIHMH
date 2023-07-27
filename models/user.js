

import firebase from 'firebase/app';
import 'firebase/firestore';
import * from '../firebase'

// Get a Firestore instance
const firestore = firebase.firestore();

// Define the user collection name
const userCollection = 'users';

// Define the user schema
const UserSchema = {
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
    validate: /^(?=.{8,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/,
  },
  image: {
    type: String,
  },
};

// Create a user document with the given data
const createUser = async (userData) => {
  try {
    const docRef = await firestore.collection(userCollection).add(userData);
    console.log('User created with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

export default {
  createUser,
};
