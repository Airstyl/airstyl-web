import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://airstyl-lite.firebaseio.com/'
});

export default instance;