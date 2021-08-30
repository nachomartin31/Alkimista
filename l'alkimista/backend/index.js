require('dotenv').config();
const express = require('express');
const debug = require('debug')('alkimista');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5001;

require('./src/config/passportConfig');

server.use(morgan('dev'));
server.use(express.json());

const dishesRouter = require('./src/routes/dishesRouter');

server.use('/api/dishes', dishesRouter);

const menuRouter = require('./src/routes/menuRouter');

server.use('/api/menu', menuRouter);

server.listen(port, debug(`Server is running on port ${port}`));
