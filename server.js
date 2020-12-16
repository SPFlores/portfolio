const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./Routes')(app)

require('./config').sync()
  .then(_ => {
    app.listen(process.env.PORT || 3006)
    console.log('server is working')
  })
  .catch(e => console.log(e))
