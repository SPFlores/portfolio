module.exports = (sequelize, Sequelize) => {
  class Experience extends Sequelize.Model { }
  Experience.init({
    name: { type: Sequelize.STRING, allowNull: false, isAlphanumeric: true, len: [2] },
    picture: { type: Sequelize.STRING, allowNull: true, isAlphanumeric: true, len: [5] },
    description: { type: Sequelize.STRING, allowNull: false, isAlphanumeric: true, len: [10] },
    repoLink: { type: Sequelize.STRING, allowNull: true, isAlphanumeric: true, len: [2] },
    deployLink: { type: Sequelize.STRING, allowNull: true, isAlphanumeric: true, len: [2] }
  }, {
    sequelize,
    modelName: 'experience'
  })
  return Experience
}
