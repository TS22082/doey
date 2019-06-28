var express = require('express')
var path = require('path')
var PORT = 3000
var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Star Wars Characters (DATA)
// =============================================================
var todos = []

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.post('/api/todo', function(req, res) {
  var newCharacter = req.body

  console.log(newCharacter)
  todos.push(newCharacter)
  res.json(todos)
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT)
})
