const { User, UserSchema } = require('./userModels');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
