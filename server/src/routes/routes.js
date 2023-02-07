const RegisterController = require('../controllers/RegisterController.js');
const RegisterControllerPolicy = require('../policies/RegisterControllerPolicy.js');
const LoginController = require('../controllers/LoginController.js');

module.exports = (app) => {
  app.post('/register', RegisterControllerPolicy, RegisterController);
  app.post('/login', LoginController);
}
