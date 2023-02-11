require('dotenv').config()

const express = require('express')
const cors = require('cors')
const Todos = require('./todos');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT


app.use(cors())
app.use(bodyParser.json()) // <-- Fix: uso de Body Parser. No estaba siendo llamado de manera correcta y tiene que estar antes de los endpoints
app.use('/api/todos', Todos);

app.get('/api', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}/api`)
})