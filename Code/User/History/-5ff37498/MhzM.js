const express = require("express")
const app = express()
const port = 2000

app.get('/', (req, res)=>{
    res.send("hi you reached the app")
    })

app.listen(port, ()=>{
    console.log("App is listening on port : ", port);
})
