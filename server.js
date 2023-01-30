require('dotenv').config()

const express = require('express')
const cors = require('cors')
const Todos = require('./todos');
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
const router = require('./todos.js')

app.use(cors())
app.use('/api/todos', Todos);
bodyParser.json([])

app.get('/api', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}/api`)
})