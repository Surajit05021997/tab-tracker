import axios from '@/services/config.js';

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

async function register(credentials) {
  const result = await axios.post('register', credentials);
  return result;
}

async function login(credentials) {
  const result = axios.post('login', credentials);
  return result;
}

async function authenticateUser() {
  const result = await axios.get('authenticteUser',{
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    }
  });
  return result;
}

async function getAllSongs() {
  const allSongs = await axios.get('songs');
  return allSongs.data;
}

async function createSong(song) {
  const result = await axios.post('songs', song);
  return result;
}

async function getSong(songId) {
  const result = await axios.get(`song/${songId}`);
  return result.data;
}

async function editSong({ songId, song }) {
  const result = await axios.put(`song/${songId}`, song);
  return result;
}

async function addFavourite(favData) {
  const result = await axios.post('/favourite', favData);
  return result;
}

async function getFavourite() {
  const result = await axios.get(`/favourite`, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    }
  });
  return result.data;
}

async function removeFavourite(favouriteId) {
  const result = await axios.delete(`/favourite/${favouriteId}`);
  return result.data;
}

export { register, login, authenticateUser, getAllSongs, createSong, getSong, editSong, addFavourite, getFavourite, removeFavourite };
