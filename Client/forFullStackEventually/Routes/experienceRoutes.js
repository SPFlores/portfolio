const { Experience, User } = require('../models')

module.exports = app => {
  app.get('/experiences', (req, res) => {
    Experience.findAll({ include: [User] })
      .then(experiences => res.json(experiences))
      .catch(e => console.log(e))
  })

  app.get('/experiences/:id', (req, res) => {
    Experience.findOne({ where: { id: req.params.id }, include: [User] })
      .then(experience => res.json(experience))
      .catch(e => console.log(e))
  })

  // must be logged in
  app.post('/experiences', (req, res) => {
    Experience.create(req.body)
      .then(_ => {
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // must be logged in
  app.put('/experiences/:id', (req, res) => {
    Experience.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // must be logged in
  app.delete('./experiences/:id', (req, res) => {
    Experience.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
