const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "home.html")
})

app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + "contacts.html")
})

app.get('/servicies', (req, res) => {
    res.sendFile(__dirname + "servicies.html")
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "about.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})