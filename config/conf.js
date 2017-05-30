
var config = {
  db:{
    user: 'lbapedmrglwvbq', //env var: PGUSER
    database: 'd2j8ll5dbtaj0s', //env var: PGDATABASE
    password: '83d6d27814f4241b7fb9685e5ea8a3cf105fea61bce169f1a41aff2538374af8', //env var: PGPASSWORD
    host: 'ec2-50-19-219-69.compute-1.amazonaws.com', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 ,
    dburl : 'postgres://lbapedmrglwvbq:83d6d27814f4241b7fb9685e5ea8a3cf105fea61bce169f1a41aff2538374af8@ec2-50-19-219-69.compute-1.amazonaws.com:5432/d2j8ll5dbtaj0s'
  },
}
module.exports = config;
