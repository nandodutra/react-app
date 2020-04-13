const port = 3003;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const queryParser = require("express-query-int");
const AllowCors = require('./coors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(AllowCors);
server.use(queryParser);

server.listen(port, () => {
    console.log(`Backend está rodando na porta: ${port}`);
})

module.exports = server;