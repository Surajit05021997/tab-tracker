const RegisterController = require('../controllers/RegisterController.js');
const RegisterControllerPolicy = require('../policies/RegisterControllerPolicy.js');
const LoginController = require('../controllers/LoginController.js');
const SongsController = require('../controllers/SongsController.js');
const FavouriteController = require('../controllers/FavouriteController.js');
const AuthenticteUserController = require('../controllers/AuthenticteUserController.js');
const isAuthenticated = require('../policies/isAuthenticated.js');
// const passport = require('passport');

module.exports = (app) => {
  app.post('/register', RegisterControllerPolicy, RegisterController);
  app.post('/login', LoginController);
  app.get('/authenticteUser', isAuthenticated, AuthenticteUserController);

  app.get('/songs', SongsController.getAllSongs);
  app.post('/songs', SongsController.postSong);
  app.get('/song/:songId', SongsController.getSong);
  app.put('/song/:songId', SongsController.putSong);
  
  app.post('/favourite', FavouriteController.addFavourite);
  app.get('/favourite', isAuthenticated, FavouriteController.getFavourite);
  app.delete('/favourite/:favouriteId', FavouriteController.deleteFavourite);
}
