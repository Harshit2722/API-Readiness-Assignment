const express = require('express');

const app = express();

const routes = require('./routes/user.routes');

app.use(express.json());

app.use('/api',routes);




module.exports = app;


