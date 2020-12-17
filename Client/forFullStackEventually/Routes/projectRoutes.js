const { Project, User } = require('../models')

module.exports = app => {
  app.get('/projects', (req, res) => {
    Project.findAll({ include: [User] })
      .then(projects => res.json(projects))
      .catch(e => console.log(e))
  })

  app.get('/projects/:id', (req, res) => {
    Project.findOne({ where: { id: req.params.id }, include: [User] })
      .then(project => res.json(project))
      .catch(e => console.log(e))
  })

  // must be logged in
  app.post('/projects', (req, res) => {
    Project.create(req.body)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // must be logged in
  app.put('/projects/:id', (req, res) => {
    Project.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // must be logged in
  app.delete('./projects/:id', (req, res) => {
    Project.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
