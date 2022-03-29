const express = require('express')
const app = express()

const port = 3001

app.get("/api", (req,res) => {
    res.json({"data": ["User_1","User_2","User_3"] })
})

app.listen(port, () =>{ console.log("Server started on port",port) })
