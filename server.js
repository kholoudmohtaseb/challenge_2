const http = require('http');
const express = require('express');
const path = require('path');
const port = 8080;
const app = express()


const JsonToCsv = require('./client/app.js').JsonToCsv;
const fs = require('fs');

// Inside your server file, you can simply point express to your client folder
app.use(express.static(__dirname + '/client'));

app.post('/', function (req, res) {
    csv = JsonToCsv(JSON.parse)
})


// server.listen(port, function (error) {
//     if (error) {
//         console.log("there is error");
//     } else {
//         console.log("server is listining" + port);
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})