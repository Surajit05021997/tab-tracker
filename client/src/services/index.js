import axios from '@/services/config.js';

async function register(credentials) {
    const result = await axios.post('register', credentials);
    return result;
}

async function login(credentials) {
    const result = axios.post('login', credentials);
    return result;
}

async function getAllSongs() {
    const allSongs = await axios.get('songs');
    return allSongs.data;
}

function createSong(song) {
    const result = axios.post('songs', song);
    return result;
}

async function getSong(songId) {
    const result = await axios.get(`song/${songId}`);
    return result.data;
}

async function editSong({songId, song}) {
    const result = await axios.put(`song/${songId}`, song);
    return result;
}

export { register, login, getAllSongs, createSong, getSong, editSong };
