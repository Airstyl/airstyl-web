import {db} from '../firebase';

export const createConsumer = (id, firstName, lastName, email) => {
    db.ref(`consumers/${id}`).set({
        firstName,
        lastName,
        email,
    });
};

export const createStylist = (id, firstName, lastName, email) => {
    db.ref(`stylists/${id}`).set({
        firstName,
        lastName,
        email,
    });
};
