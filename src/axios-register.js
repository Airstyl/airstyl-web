import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.backendless.com/40C25AEA-9073-6206-FF0B-A85037748D00/97016108-492D-BD09-FF79-2569CF895F00',
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;