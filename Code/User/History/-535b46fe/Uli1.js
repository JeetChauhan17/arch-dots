// STEPS: 
// 1 : Make folder
// 2: run `npm init -y`
// 3: Install Express


const express = require('express')
const port = 3000


// This function is similar to the fs.readFile function.
// fs.readFile("path", "utf-8", ()){}
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})