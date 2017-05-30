const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
var config1 = {

    user: 'lbapedmrglwvbq', //env var: PGUSER
    database: 'd2j8ll5dbtaj0s', //env var: PGDATABASE
    password: '83d6d27814f4241b7fb9685e5ea8a3cf105fea61bce169f1a41aff2538374af8', //env var: PGPASSWORD
    host: 'ec2-50-19-219-69.compute-1.amazonaws.com', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 ,
    ssl: true


};
// connect to the database and load models
require('pg').connect(config1);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
