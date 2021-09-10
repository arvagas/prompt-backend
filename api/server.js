const express = require('express');
const server = express();
const cors = require('cors');
const userRoute = require('./user/userRoute');

server.use(express.json());
server.use(cors());
server.use('/user', userRoute)

server.get('/', (req, res) => {
  res.json('Hello world!');
});

module.exports = server;