const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/src')));

app.get('/',(req,res) => { 
    res.sendFile(__dirname + "/src/main.html");
})

app.listen(3000, () => {
    console.log("listening on 3000")
})