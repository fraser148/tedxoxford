const express           = require('express');
const app               = express();
const path              = require('path');
const mysql             = require('mysql');
const Router            = require('./Router');
const cors = require('cors');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use(cors({
    origin: 'https://tedxoxford.co.uk'
}));

// Databases
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    pass: process.env.PASS,
    database: process.env.DATABASE
})

db.connect(function(err) {
    if (err) {
        console.log("DB error");
        throw err;
    }
});


new Router(app, db);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
});

app.listen(3001);