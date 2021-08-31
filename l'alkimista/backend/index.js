require('dotenv').config();
const express = require('express');
const debug = require('debug')('alkimista');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/passportConfig')(server);

server.use(morgan('dev'));
server.use(express.json());

const dishesRouter = require('./src/routes/dishesRouter');

server.use('/api/dishes', dishesRouter);

const menuRouter = require('./src/routes/menuRouter');

server.use('/api/menu', menuRouter);

const userRouter = require('./src/routes/userRouter');

server.use('/api/users', userRouter);

const wineRouter = require('./src/routes/wineRouter');

server.use('/api/wines', wineRouter);

const bookRouter = require('./src/routes/bookingRouter');

server.use('/api/books', bookRouter);

server.listen(port, debug(`Server is running on port ${port}`));
