import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDb436xTjJFwaz9KtOPLxl-dW-nKHJ119s",
    authDomain: "airstyl-web-dev.firebaseapp.com",
    databaseURL: "https://airstyl-web-dev.firebaseio.com",
    projectId: "airstyl-web-dev",
    storageBucket: "",
    messagingSenderId: "744868893206"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
    auth,
    db,
};

