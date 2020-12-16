const { User } = require('../models')

module.exports = app => {
  app.get('/users', (req, res) => {
    User.findAll()
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })

  app.get('/users/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id } })
      .then(user => res.json(user))
      .catch(e => console.log(e))
  })

  app.get('/login/:username/:password', (req, res) => {
    User.findAll({
      where: [{ username: req.params.username }, { password: req.params.password }]
    })
      .then(user => {
        res.json(user)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  app.post('/register', (req, res) => {
    User.create(req.body)
      .then(user => {
        res.json(user)
        res.sendStatus(200)
      })
      .catch(e => {
        res.json(e)
      })
  })

  app.put('/users', (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.delete('./users/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
