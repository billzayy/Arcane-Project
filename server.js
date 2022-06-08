const express = require('express');
const path = require('path');
const app = express();

// Import files
const sql = require('./sql')

app.use(express.static(path.join(__dirname + '/src')));

app.get('/',(req,res) => { 
    res.sendFile(__dirname + "/src/main.html");
})

app.get('/api', (req, res) => {
    sql.conSQL("Select * from Product", (recordset) => {
        res.send(recordset)
    })
})

app.listen(3000, () => {
    console.log("listening on 3000")
})
