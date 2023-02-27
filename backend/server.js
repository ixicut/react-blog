const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');
const app = express();
app.use(cors());
app.use(express.json({ type: "/" }));

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: 'petrov',
  port: 5432
});

  app.get(``,async (req, res) => {
    try {
      const client = await pool.connect();
      const data = await client.query('SELECT * FROM articles');
      res.send(data.rows);
      client.release();
    } catch (exception) {
      console.error(exception);
      res.send('Error ' + exception);
    }
  });



app.listen(3001, () => {
  console.log('Server listening on port 3001');
});