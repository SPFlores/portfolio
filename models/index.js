const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./users.js')(sequelize, Sequelize)
let Project = require('./projects.js')(sequelize, Sequelize)
let Experience = require('./experiences.js')(sequelize, Sequelize)

User.hasMany(Project)
User.hasMany(Experience)
Project.belongsTo(User)
Experience.belongsTo(User)

module.exports = { User, Project, Experience }
