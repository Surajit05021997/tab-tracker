import axios from '@/services/config.js';

async function register(credentials) {
    const result = await axios.post('register', credentials);
    return result;
}

async function login(credentials) {
    const result = axios.post('login', credentials);
    return result;
}

export { register, login };
