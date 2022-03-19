const { Strategy } = require('passport-local');
const AuthService = require('./../../../services/authService');
const service = new AuthService();

//Busca al usuario por email
const LocalStrategy = new Strategy(
  { usernameField: 'email',
   passwordField: 'password'
   },
  async (email, password, done) => {
    try {
      const user   = await service.getUser(email, password);
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
);

module.exports = LocalStrategy;
