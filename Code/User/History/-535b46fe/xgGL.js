// STEPS: 
// 1 : Make folder
// 2: run `npm init -y`
// 3: Install Express


const express = require('express')
const app = express()
const port = 3000


// This function is similar to the fs.readFile function.
// fs.readFile("path", "utf-8", ()){}
app.get('/', function (req, res) {
  res.send('Hello World!')  // Whenever someone would try to hit your backend server, the control will reach here.
})

app.listen(port)  // the app is listening on the port number 3000