const express = require('express');
const path = require('path');
const app = express();

// Import files
const sql = require('./sql')

app.use(express.static(path.join(__dirname + '/src')));

app.get('/',(req,res) => { 
    res.sendFile(__dirname + "/src/main.html");
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/src/login.html');
})

app.get('/login/:username/:password/:email', (req, res) => {
    var userName = req.params['username'];
    var password = req.params['password'];
    var email = req.params['email'];
    
    sql.conSQL(`INSERT INTO Login (username, password, email) VALUES ('${userName}', '${password}', '${email}')`, (recordset) => { 
        res.send(recordset)
    })
})

app.get('/category', (req, res) => { 
    res.sendFile(__dirname + '/src/category.html')
})

app.get('/api/product', (req, res) => {
    sql.conSQL("Select * from Product", (recordset) => {
        res.send(recordset)
    })
})

app.get('/api/login', (req, res) => { 
    sql.conSQL("Select * From Login", (recordset) => {
        res.send(recordset)
    })
})

app.listen(3000, () => {
    console.log("listening on 3000")
})
