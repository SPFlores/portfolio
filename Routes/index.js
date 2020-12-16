module.exports = app => {
  require('./userRoutes')(app)
  require('./projectRoutes')(app)
  require('./experienceRoutes')(app)
}
