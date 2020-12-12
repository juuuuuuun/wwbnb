require('./middlewares/config');
const express = require('express');
const path = require('path');
const middlewares = require('./middlewares');
const homeRouter = require('./domains/home/router');
const roomRouter = require('./domains/room/router');
const errorController = require('./domains/error/controller');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

middlewares(app);

app.use('/', homeRouter);
app.use('/room', roomRouter);
app.use(errorController);

module.exports = app;
