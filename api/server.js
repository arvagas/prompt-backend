const express = require('express');
const server = express();
const cors = require('cors');
const userRouter = require('./user/userRoute');
const apptRouter = require('./appointment/appointmentRoute');

server.use(express.json());
server.use(cors());
server.use('/api/users', userRouter)
server.use('/api/appointments', apptRouter)

const knex = require('knex');
knex('knex_migration')
    .delete()
    .whereIn('users', ['20210910162056_tables.js']);

server.get('/', (req, res) => {
  res.json('Hello world!');
});

module.exports = server;