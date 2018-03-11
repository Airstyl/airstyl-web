import {db} from '../firebase';

export const createUser = (id, firstname, lastname, username, email) => {
    db.ref(`users/${id}`).set({
        firstname,
        lastname,
        username,
        email,
    });
};

export const getUnavailableUsernames = () => {
    let usernames = [];
    db.ref().child('users').once('value', (usersSnap) => {
        usersSnap.forEach(userSnap => {
            usernames.push(userSnap.child('username').val().toString());
        })
    });
};