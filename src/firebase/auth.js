import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const sendVerificationEmail = () =>
    auth.currentUser.sendEmailVerification();