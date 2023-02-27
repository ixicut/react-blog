const {Pgsql} = require('pg');

export const pgsql = new Pgsql({
    user: 'react-blog',
    host: 'localhost',
    database: 'blog',
    password: '1111',
    port: 5432
  });