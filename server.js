const http = require('http');
const express = require('express');
const path = require('path');

const app = express;
app.use(express.json());
app.use(express.static("express"));

app.use('/', function (req, res) {
    // res.sendFile
});


const server = http.createServer(function (req, res) {

});

server.listen(port, function (error) {
    if (error) {
        console.log("there is error");
    } else {
        // console.log("server is listining");
        server.listen(port);
    }
})