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

const router = require('./src/routes/router');

server.use('/', router);

server.listen(port, debug(`Server is running on port ${port}`));
