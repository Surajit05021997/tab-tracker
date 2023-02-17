const RegisterController = require('../controllers/RegisterController.js');
const RegisterControllerPolicy = require('../policies/RegisterControllerPolicy.js');
const LoginController = require('../controllers/LoginController.js');
const SongsController = require('../controllers/SongsController.js');

module.exports = (app) => {
  app.post('/register', RegisterControllerPolicy, RegisterController);
  app.post('/login', LoginController);
  app.get('/songs', SongsController.getAllSongs);
  app.post('/songs', SongsController.postSong);
  app.get('/song/:songId', SongsController.getSong);
  app.put('/song/:songId', SongsController.putSong);
}
