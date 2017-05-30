const logger = require('../logger.js');
const pg = require('pg');
const config = {
  user: 'lbapedmrglwvbq', //env var: PGUSER
  database: 'd2j8ll5dbtaj0s', //env var: PGDATABASE
  password: '83d6d27814f4241b7fb9685e5ea8a3cf105fea61bce169f1a41aff2538374af8', //env var: PGPASSWORD
  host: 'ec2-50-19-219-69.compute-1.amazonaws.com', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000

};

const pool = new pg.Pool(config);

pool.on('error', (err, client) => {
  //logger.error({category: 'DB', msg: err.message});
  console.error('idle client error', err.message, err.stack);
});
require('./user');
module.exports = pool;


// const mongoose = require('mongoose');
//
// module.exports.connect = (uri) => {
//   mongoose.connect(uri);
//   // plug in the promise library:
//   mongoose.Promise = global.Promise;
//
//
//   mongoose.connection.on('error', (err) => {
//     console.error(`Mongoose connection error: ${err}`);
//     process.exit(1);
//   });
//
//   // load models
//   require('./user');
// };
