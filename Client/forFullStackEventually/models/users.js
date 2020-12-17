module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model { }
  User.init({
    name: { type: Sequelize.STRING, allowNull: false, isAlphanumeric: true, len: [2] },
    username: { type: Sequelize.STRING, allowNull: false, isAlphanumeric: true, len: [2], unique: true },
    email: { type: Sequelize.STRING, allowNull: false, isAlphanumeric: true, len: [5], unique: true },
    password: { type: Sequelize.STRING, allowNull: false, notContains: 'password', len: [8, 24] },
  }, {
    sequelize,
    modelName: 'user'
  })

  return User
}
