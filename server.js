var express = require('express')
var path = require('path')
var PORT = 3000
var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var todos = []

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})

app.post('/api/todo', function(req, res) {
  var newTodo = req.body
  todos.push(newTodo)
  res.json(todos)
})

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT)
})
