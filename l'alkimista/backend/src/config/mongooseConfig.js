const { connect } = require('mongoose');
const debug = require('debug')('alkimistaApi:mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connexion error', error)
);
